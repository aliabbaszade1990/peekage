import { TINY_OFFER_FIELDS } from "../fragments";

export const OFFERS_QUERY = /* GraphQL */ `
  ${TINY_OFFER_FIELDS}
  query SearchOffer($offset: Int, $first: Int, $name: String, $status: CampaignStatus) {
    searchOffer(offset: $offset, first: $first, name: $name, status: $status) {
      code
      message
      totalCount
      results {
        ...TinyOfferFields
      }
    }
  }
`;


