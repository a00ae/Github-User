export type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export type Action<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: T }
  | { type: "FETCH_ERROR"; payload: string };

  
