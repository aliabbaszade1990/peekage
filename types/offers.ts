export type CampaignStatus =
  | "INVALID"
  | "DRAFT"
  | "ASSESSING"
  | "VERIFIED"
  | "LIVE"
  | "PAUSE"
  | "FINISHED"
  | "TERMINATED"
  | "REJECTED"
  | "INPROGRESS";

export type PictureDimensions = {
  height: number;
  width: number;
};

export type Picture = {
  dimensions?: PictureDimensions | null;
  id?: string | null;
  imageKitUri?: string | null;
  name?: string | null;
  uri?: string | null;
};

export type TinyOffer = {
  id: string;
  isRejected?: boolean | null;
  name: string;
  poster?: Picture | null;
  rejectReason?: string | null;
  status?: CampaignStatus | null;
};

// Back-compat alias for existing UI code.
export type Offer = TinyOffer;
