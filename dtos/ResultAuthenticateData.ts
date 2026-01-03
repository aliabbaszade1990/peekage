import type { AuthenticateDataObject } from "~/types/AuthenticateDataObject";
import type { ServiceResult } from "./ServiceResult";

export interface ResultAuthenticateData {
  authViaPassword: ServiceResult<AuthenticateDataObject>;
}
