import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchImages } from "../../services/google-api";

import ImageCard from "../../components/ImageCard";
import Layout from "../layout";

import Vendors from "../../tests/mocks/vendors.json";

const ImagesPage = () => {
  const { query = "flores" } = useParams();
  const [photos, setPhotos] = useState([{ link: "" }]);

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await searchImages(query)
      if (photos.length) setPhotos(photos);
    }

    getPhotos();
  }, [query]);

  return (
    <Layout customClassName="pt-3 pb-4">
      <div className="container">
        <div className="row">
          {Array.from(Vendors).map((vendor, index) => (
            <div className="col-12 col-lg-6 mb-4" key={vendor.id}>
              <ImageCard vendor={vendor} photo={photos[index]?.link} index={index} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ImagesPage;
