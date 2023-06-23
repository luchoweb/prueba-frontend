const { VITE_APP_ALEGRA_USER, VITE_APP_ALEGRA_TOKEN, VITE_APP_ALEGRA_API_URL } = import.meta.env;

const headerAuth = btoa(`${VITE_APP_ALEGRA_USER}:${VITE_APP_ALEGRA_TOKEN}`);

const fecthOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Authorization": `Basic ${headerAuth}`,
  }
};

export const getSellers = async () => {
  const response = await fetch(
    `${VITE_APP_ALEGRA_API_URL}/sellers`,
    fecthOptions
  );
  const sellers = await response.json();
  return sellers || [];
};
