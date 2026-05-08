import type { Action, State } from "../typescript/type";

export function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false };
    default:
      return state;
  }
};

