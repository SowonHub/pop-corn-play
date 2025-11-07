import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/getPopularMovies.js";

export function usePopularMovies(page = 1) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    setError(null);

    getPopularMovies(page, { signal: ctrl.signal })
      .then(setData)
      .catch((e) => !ctrl.signal.aborted && setError(e))
      .finally(() => !ctrl.signal.aborted && setLoading(false));

    return () => ctrl.abort();
  }, [page]);

  return { data, loading, error };
}
