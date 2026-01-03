import type { OffersQueryVars } from "~/dtos/OffersQueryVars";
import type { ResultsTinyOffer } from "~/dtos/ResultsTinyOffer";
import { OFFERS_QUERY } from "~/graphql/queries/offers.query";
import { graphqlRequest } from "~/services/graphql.client";

export function useOffers() {
  async function listOffers(params?: OffersQueryVars) {
    const data = await graphqlRequest<ResultsTinyOffer, OffersQueryVars>(
      OFFERS_QUERY,
      {
        offset: params?.offset ?? null,
        first: params?.first ?? null,
        name: params?.name ?? null,
        status: params?.status ?? null,
      }
    );

    const result = data.searchOffer;

    return {
      offers: result.results ?? [],
      totalCount: result.totalCount ?? 0,
    };
  }

  return {
    listOffers,
  };
}
