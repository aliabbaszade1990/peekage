export interface ServiceResult<T> {
  code: string;
  message?: string | null;
  result?: T;
  results?: T[];
  totalCount?: number | null;
}
