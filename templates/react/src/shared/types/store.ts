export type StoreResponse<T = unknown> = {
  data: T;
  error: unknown | null;
} | void;
