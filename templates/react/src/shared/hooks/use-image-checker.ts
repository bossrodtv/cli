import { useEffect, useMemo, useRef, useState } from 'react';

export const useImageChecker = () => {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLImageElement>();

  const onLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return useMemo(
    () => ({
      ref,
      loading,
      onLoad,
    }),
    [loading]
  );
};
