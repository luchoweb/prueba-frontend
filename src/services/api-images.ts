import { Photo, createClient } from "pexels";

type PhotoProps = {
  photos?: Array<Photo>
}

export const searchImages = async (query: string) => {
  try {
    const { VITE_APP_PEXELS_API_KEY } = import.meta.env;
    const client = createClient(VITE_APP_PEXELS_API_KEY);
    const response = await client.photos.search({ query, per_page: 4 }) as PhotoProps;
    return response;
  } catch (error) {
    console.error(error);
  }
};
