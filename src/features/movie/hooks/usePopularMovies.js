import { getPopularMovies } from "@/features/movie/api/getPopularMovies.js";
import { useEffect, useState } from "react";

export default function usePopularMovies(page = 1) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    getPopularMovies(page)
      .then(setData)
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [page]);

  return { data, loading, error };
}
