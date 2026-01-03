export interface AuthenticateDataObject {
  accessToken: string;
  refreshToken: string;
  tokenType?: string | null;
  expiresIn?: number | null;
  roles?: string[] | null;
}
