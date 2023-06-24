export interface Seller {
  id: string;
  identification?: string;
  name: string;
  observations?: string | null;
  status?: string;
}

export interface Invoice {
  id?: string;
  items: object[];
  dueDate: date;
  date: date;
  client: object;
}

export type ImageCardProps = {
  seller: Seller;
  index: number;
  image?: string;
};

export type AvatarProps = {
  seller: Seller;
  height?: number;
  customClassName?: string;
};

export type AppLogoProps = {
  theme?: string
};

export type SellerCardProps = {
  seller: Seller;
}

export type InvoiceCardProps = {
  invoice: Invoice;
}
