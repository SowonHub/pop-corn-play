// TMDB REST 엔드포인트
export const TMDB = {
  TRENDING_MOVIES_DAY: "/trending/movie/day",
  SEARCH_MOVIE: "/search/movie",
  MOVIE_DETAIL: (id = ":id") => `/movie/${id}`,
};
