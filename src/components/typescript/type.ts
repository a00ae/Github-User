export type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export type Action<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: T }
  | { type: "FETCH_ERROR"; payload: string };


export interface Repos  {
  id: number;
  language: string;
  description: string | null;
  visibility: string;
  name: string;
}

  
