import { buildUrl } from "@/constants/api.js";

export async function getPopularMovies(page = 1, { signal } = {}) {
  const url = buildUrl("/movie/popular", { language: "ko-KR", page });
  const res = await fetch(url, {
    signal,
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`TMDB ${res.status} ${res.statusText}`);
  return res.json();
}
