import type { ServiceResult } from "./ServiceResult";
import type { CampaignV2Details } from "~/types/CampaignV2";

export interface ResultCampaignV2 {
  campaignV2: ServiceResult<CampaignV2Details>;
}
