export interface Invoice {
  id?: string;
  items: InvoiceProduct[];
  dueDate: date;
  date: date;
  client: InvoiceClient;
  seller: Seller;
}

export interface InvoiceAPI {
  id?: string;
  items: InvoiceProduct[];
  dueDate: date;
  date: date;
  client: number;
  seller: Seller;
}

export type Seller  = {
  id: string;
  identification?: string;
  name: string;
  observations?: string | null;
  status?: string;
}

export type InvoiceProduct  = {
  id: number;
  price: number;
  name?: string;
  quantity: number;
}

export type InvoiceClient = {
  id: number;
  name: string;
}

export type ImageCardProps = {
  seller: Seller;
  image?: string;
};

export type AvatarProps = {
  seller: Seller;
  height?: number;
  customClassName?: string;
};

export type AppLogoProps = {
  theme?: string;
};

export type SellerCardProps = {
  seller: Seller;
};

export type InvoiceRowProps = {
  invoice: Invoice;
};
