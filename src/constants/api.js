export const API = {
  BASE: import.meta.env.VITE_TMDB_API_BASE,
  KEY: import.meta.env.VITE_TMDB_API_KEY,
  TOKEN: import.meta.env.VITE_TMDB_ACCESS_TOKEN,
};

export function buildUrl(path, params = {}) {
  const url = new URL(`${API.BASE}${path}`);
  url.searchParams.set("api_key", API.KEY);
  Object.entries(params).forEach(([k, v]) => {
    if (v == null) return;
    let s = typeof v === "string" ? v.replace(/^"|"$/g, "").trim() : String(v);
    if (s !== "") url.searchParams.set(k, s);
  });
  return url.toString();
}
