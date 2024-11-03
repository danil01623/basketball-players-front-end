import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<object | null>();

  // Avoiding rerender same
  const activeHttpRequest = useRef<any>([]);

  const sendRequest = useCallback(
    async (
      url: string,
      method: string = "GET",
      body: BodyInit | null = null,
      headers: HeadersInit = {}
    ) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequest.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        // clear abort controllers for request that just finished

        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl: unknown) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err: any) {
        setError(err);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  // cleanup
  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl: { abort: () => any }) =>
        abortCtrl.abort()
      );
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
