export function minToHM(min = 0) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h}시간 ${m}분` : `${m}분`;
}

export function formatMovieData(movie) {
  if (!movie) {
    return {
      id: "",
      title: "",
      voteAverage: "-",
      year: "",
      posterPath: null,
      backdropPath: null,
    };
  }

  return {
    id: movie.id,
    title: movie.title || movie.name || "Untitled",
    voteAverage: movie.vote_average?.toFixed?.(1) ?? "-",
    year: movie.release_date?.split("-")[0] || "",
    posterPath: movie.poster_path,
    backdropPath: movie.backdrop_path,
  };
}
