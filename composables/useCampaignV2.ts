import type { CampaignV2QueryVars } from "~/dtos/CampaignV2QueryVars";
import type { ResultCampaignV2 } from "~/dtos/ResultCampaignV2";
import { CAMPAIGN_V2_QUERY } from "~/graphql/queries/campaignV2.query";
import { graphqlRequest } from "~/services/graphql.client";

export function useCampaignV2() {
  async function getCampaignV2(id: string) {
    const data = await graphqlRequest<ResultCampaignV2, CampaignV2QueryVars>(
      CAMPAIGN_V2_QUERY,
      { id }
    );

    return data.campaignV2;
  }

  return {
    getCampaignV2,
  };
}
