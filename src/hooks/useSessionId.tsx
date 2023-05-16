import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getSessionId } from "@/controllers/movies";

export function useSessionId() {
  const [sessionId, setSessionId] = useLocalStorage("sessionId", "");

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (!sessionId) {
      getSessionId()
        .then((data) => {
          setSessionId(data);
        })
        .catch((error) => {
          showBoundary(error);
        });
    }
  }, []);

  return { sessionId };
}
