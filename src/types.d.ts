export interface Seller {
  id: string;
  identification?: string;
  name: string;
  observations?: string | null;
  status?: string;
};

export type ImageCardProps = {
  seller: Seller;
  index: number;
  image?: string;
};
