export interface Invoice {
  id?: string;
  items: InvoiceProduct[];
  dueDate: date;
  date: date;
  client: InvoiceClient;
  seller: Seller;
}

interface InvoiceAPI extends Omit<Invoice, 'client'> {
  client: number;
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

export type SellerCardProps = {
  seller: Seller;
};

export type ImageCardProps = SellerCardProps & {
  image?: string;
};

export type AvatarProps = SellerCardProps & {
  height?: number;
  customClassName?: string;
};

export type AppLogoProps = {
  theme?: string;
};

export type InvoiceRowProps = {
  invoice: Invoice;
};
