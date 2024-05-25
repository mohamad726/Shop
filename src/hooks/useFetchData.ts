import { useEffect, useState } from "react";

export const useFetchData = (getDataFn) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    try {
      getDataFn().then((res) => {
        setData(res);
        setIsLoading(false);
      });
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error };
};
