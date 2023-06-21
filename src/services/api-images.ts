import { createClient } from "pexels";

export const searchImages = async (query: string) => {
  try {
    const { VITE_APP_PEXELS_API_KEY } = import.meta.env;
    const client = createClient(VITE_APP_PEXELS_API_KEY);
    const response = await client.photos.search({ query, per_page: 4 });
    return response || [];
  } catch (error) {
    return [];
  }
};
