import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram } from "react-content-loader";

import { searchImages } from "../../services/api-images";

import ImageCard from "../../components/ImageCard";
import Layout from "../layout";

import Vendors from "../../tests/mocks/vendors.json";

const ImagesPage = () => {
  const { query = "flores" } = useParams();
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await searchImages(query);
      if (response?.photos?.length) {
        setImages(response?.photos);
        setIsLoading(false);
      }
    };

    getPhotos();
  }, [query]);

  return (
    <Layout customClassName="pt-3 pb-4">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-6">
            <h5 className="m-0">{`${t("search-results-title")}: "${query}"`}</h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <Link to="/" className="btn btn--dark">
              {t("search-again")}
            </Link>
          </div>
        </div>

        <div className="row">
          {isLoading ? (
            Array.from(Vendors).map((vendor) => (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                key={vendor.id}
              >
                <Instagram />
              </div>
            ))
          ) : !isLoading && !images[0] ? (
            <div className="col-12 pb-5">
              <p className="m-0">{t("search-results-no-images")}.</p>
              <Link to="/" className="btn btn--dark mt-4 d-inline-block">
                {t("back")}
              </Link>
            </div>
          ) : (
            Array.from(Vendors).map((vendor, index) => (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                key={vendor.id}
              >
                <ImageCard
                  vendor={vendor}
                  image={images[index]?.src?.large}
                  index={index}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ImagesPage;
