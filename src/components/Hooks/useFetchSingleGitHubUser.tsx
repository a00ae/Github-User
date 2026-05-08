import { useEffect, useState } from "react";

interface GitHubDataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetchSingleGitHubUser = <T,>(username: string): GitHubDataState<T> => {
  const [state, setState] = useState<GitHubDataState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      if (!username) {
        setState({ data: null, loading: false, error: null });
        return;
      }

      setState((prevState) => ({ ...prevState, loading: true, error: null }));
      try {
        const response = await fetch(`https://api.github.com/users/${username.trim()}`, { signal });
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`User "${username}" not found.`);
          }
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setState({ data: null, loading: false, error: err instanceof Error ? err.message : "An unknown error occurred" });
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [username]);

  return state;
};
