export const searchImages = async (query: string) => {
  try {
    const { VITE_APP_GOOGLE_CSE_ID, VITE_APP_GOOGLE_API_KEY } = import.meta.env;

    const options = {
      size: "large",
      type: "photo",
      safe: "high",
    };

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURI(query)}&searchType=image&cx=${VITE_APP_GOOGLE_CSE_ID}&key=${VITE_APP_GOOGLE_API_KEY}&imgSize=${options.size}&imgType=${options.type}&safe=${options.safe}`);

    const result = await response.json();

    return result.items || [];
  } catch(err) {
    //console.error(err);
    return [];
  }
};
