import { Seller, Invoice, InvoiceAPI } from "../types";

const { VITE_APP_ALEGRA_USER, VITE_APP_ALEGRA_TOKEN, VITE_APP_ALEGRA_API_URL } =
  import.meta.env;

const headerAuth = btoa(`${VITE_APP_ALEGRA_USER}:${VITE_APP_ALEGRA_TOKEN}`);

const fetchOptions = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Basic ${headerAuth}`,
  },
};

export const getSellers = async () => {
  const response = await fetch(`${VITE_APP_ALEGRA_API_URL}/sellers`, {
    ...fetchOptions,
    method: "GET",
  });
  const sellers = await response.json();
  return sellers || [];
};

export const getSellerLikes = async (id: string) => {
  const response = await fetch(`${VITE_APP_ALEGRA_API_URL}/sellers/${id}`, {
    ...fetchOptions,
    method: "GET",
  });
  const seller = await response.json();
  return parseInt(`${seller.observations}`) || 0;
};

export const updateSellerLikes = async ({ id, name, observations }: Seller) => {
  const response = await fetch(`${VITE_APP_ALEGRA_API_URL}/sellers/${id}`, {
    ...fetchOptions,
    method: "PUT",
    body: JSON.stringify({ name, observations }),
  });
  const sellers = await response.json();
  return sellers || [];
};

export const getInvoices = async () => {
  const response = await fetch(`${VITE_APP_ALEGRA_API_URL}/invoices`, {
    ...fetchOptions,
    method: "GET",
  });
  const invoices = await response.json();
  return invoices || [];
};

export const createInvoice = async ({ items, dueDate, date, client }: InvoiceAPI) => {
  const response = await fetch(`${VITE_APP_ALEGRA_API_URL}/invoices`, {
    ...fetchOptions,
    method: "POST",
    body: JSON.stringify({ items, dueDate, date, client }),
  });
  const invoice = await response.json();
  return invoice || [];
};
