import { Seller } from "../types";

const { VITE_APP_ALEGRA_USER, VITE_APP_ALEGRA_TOKEN, VITE_APP_ALEGRA_API_URL } = import.meta.env;

const headerAuth = btoa(`${VITE_APP_ALEGRA_USER}:${VITE_APP_ALEGRA_TOKEN}`);

const fecthOptions = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Basic ${headerAuth}`,
  },
};

export const getSellers = async () => {
  const response = await fetch(`${VITE_APP_ALEGRA_API_URL}/sellers`, {
    ...fecthOptions,
    method: "GET",
  });
  const sellers = await response.json();
  return sellers || [];
};

export const updateSellerLikes = async ({ id, name, observations }: Seller) => {
  const response = await fetch(`${VITE_APP_ALEGRA_API_URL}/sellers/${id}`, {
    ...fecthOptions,
    method: "PUT",
    body: JSON.stringify({ name, observations }),
  });
  const sellers = await response.json();
  return sellers || [];
};
