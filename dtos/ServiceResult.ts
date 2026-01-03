export interface ServiceResult<T> {
  code: string;
  message?: string | null;
  result?: T;
  totalCount: number;
}
