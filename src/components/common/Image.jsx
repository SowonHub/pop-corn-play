import { IMG, imgSrc } from "@/constants";
import { cn } from "@/utils/cn.js";

/**
 * props:
 * - src: TMDB path 또는 절대 URL
 * - type: 'poster' | 'backdrop' | 'thumb' | 'original'
 * - width/height: 성능·LCP 위해 가능하면 지정
 */
export default function Image({
  src,
  alt = "",
  type = "poster",
  size,
  className,
  ...rest
}) {
  const onError = (e) => {
    if (e?.currentTarget) {
      e.currentTarget.src = IMG.NO_IMAGE;
      e.currentTarget.onerror = null; // 루프 방지
    }
  };

  return (
    <img
      loading="lazy"
      decoding="async"
      src={imgSrc(src, type, size)}
      alt={alt}
      onError={onError}
      className={cn("block h-auto max-w-full", className)}
      {...rest}
    />
  );
}
