import { useDatabaseAuth } from "@/auth/context";
import { wishlistService } from "@/services/wishlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

const normalizeMovie = (movie) => ({
  id: movie?.id,
  title: movie?.title ?? movie?.name ?? "Untitled",
  poster_path: movie?.poster_path ?? movie?.backdrop_path ?? null,
  backdrop_path: movie?.backdrop_path ?? movie?.poster_path ?? null,
  vote_average: movie?.vote_average,
  release_date: movie?.release_date,
});

export default function useWishlist() {
  const { user } = useDatabaseAuth();
  const userId = user?.id ?? null;
  const queryClient = useQueryClient();

  const queryKey = ["wishlist", userId];

  const { data: items = [] } = useQuery({
    queryKey,
    queryFn: () => wishlistService.getItems(userId),
    enabled: !!userId,
    initialData: [],
  });

  const { mutate: addMutate } = useMutation({
    mutationFn: (movie) => wishlistService.addItem(userId, movie),
    // 2. Optimistic Update: UI를 즉시 업데이트
    onMutate: async (movie) => {
      // 진행 중인 쿼리 취소 (낙관적 업데이트 덮어쓰기 방지)
      await queryClient.cancelQueries({ queryKey });
      const previousItems = queryClient.getQueryData(queryKey) || [];

      // 이미 목록에 없다면 추가
      if (!previousItems.some((item) => item.id === movie.id)) {
        queryClient.setQueryData(queryKey, [movie, ...previousItems]);
      }

      // 에러 발생 시 롤백을 위한 컨텍스트 반환
      return { previousItems };
    },
    // 3. 에러 처리: 이전 상태로 롤백
    onError: (err, newMovie, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData(queryKey, context.previousItems);
      }
    },
    // 4. 완료 처리: 서버 데이터와 동기화 (최신 데이터 보장)
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const { mutate: removeMutate } = useMutation({
    mutationFn: (movieId) => wishlistService.removeItem(userId, movieId),
    // 2. Optimistic Update: UI를 즉시 업데이트
    onMutate: async (movieId) => {
      await queryClient.cancelQueries({ queryKey });
      const previousItems = queryClient.getQueryData(queryKey) || [];

      queryClient.setQueryData(
        queryKey,
        previousItems.filter((item) => item.id !== movieId),
      );

      return { previousItems };
    },
    // 3. 에러 처리: 이전 상태로 롤백
    onError: (err, movieId, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData(queryKey, context.previousItems);
      }
    },
    // 4. 완료 처리: 서버 데이터와 동기화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const add = useCallback(
    (movie) => {
      if (!userId) {
        return;
      }
      const normalized = normalizeMovie(movie);
      addMutate(normalized);
    },
    [userId, addMutate],
  );

  const remove = useCallback(
    (movieId) => {
      if (!userId) {
        return;
      }
      removeMutate(movieId);
    },
    [userId, removeMutate],
  );

  const toggle = useCallback(
    (movie) => {
      if (!userId) {
        return;
      }
      const exists = items.some((item) => item.id === movie.id);
      if (exists) {
        remove(movie.id);
      } else {
        add(movie);
      }
    },
    [userId, items, add, remove],
  );

  const contains = useCallback(
    (movieId) => {
      return items.some((item) => item.id === movieId);
    },
    [items],
  );

  return {
    items,
    add,
    remove,
    toggle,
    contains,
  };
}
