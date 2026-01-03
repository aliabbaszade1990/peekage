import type { ServiceResult } from "./ServiceResult";
import type { Offer } from "~/types/Offers";

export interface ResultsTinyOffer {
  searchOffer: ServiceResult<Offer>;
}
