export const TINY_OFFER_FIELDS = /* GraphQL */ `
  fragment TinyOfferFields on TinyOffer {
    id
    name
    status
    isRejected
    rejectReason
    poster {
      id
      name
      uri
      imageKitUri
      dimensions {
        width
        height
      }
    }
  }
`;
