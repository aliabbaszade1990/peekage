import type { CampaignStatus } from "~/types/Offers";

export interface OffersQueryVars {
  offset?: number | null;
  first?: number | null;
  name?: string | null;
  status?: CampaignStatus | null;
}
