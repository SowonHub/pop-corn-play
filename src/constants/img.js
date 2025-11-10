// TMDB 이미지 경로/사이즈 + 유틸
export const IMG = {
  BASE: "https://image.tmdb.org/t/p/",
  SIZE: {
    poster: "w342",
    backdrop: "w1280",
    thumb: "w185",
    original: "original",
  },
  // public/no-image.png 파일 하나 넣어주세요.
  NO_IMAGE: "/no-image.png",
};

/**
 * TMDB path -> full url
 * - path가 없으면 NO_IMAGE
 * - http로 시작하면 그대로 사용
 */
export function imgSrc(path, type = "poster", size) {
  if (!path) return IMG.NO_IMAGE;
  if (/^https?:\/\//.test(path)) return path;
  const s = size || IMG.SIZE[type] || IMG.SIZE.poster;
  return `${IMG.BASE}${s}${path}`;
}
