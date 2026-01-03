export const CAMPAIGN_V2_QUERY = /* GraphQL */ `
  query CampaignV2($id: ID!) {
    campaignV2(id: $id) {
      code
      message
      result {
        id
        preferredStartDate
        targetCount
        credit
      }
    }
  }
`;
