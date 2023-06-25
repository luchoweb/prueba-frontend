import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram } from "react-content-loader";
import { Photo } from "pexels";

import { searchImages } from "../../services/api-images";
import { getSellers } from "../../services/api-alegra";

import { Seller } from "../../types";

import ImageCard from "../../components/ImageCard";
import Layout from "../layout";

const ImagesPage = () => {
  const { query = "flowers" } = useParams();
  const { t } = useTranslation();
  const skeletons = [1, 2, 3, 4];
  const [images, setImages] = useState<Photo[]>();
  const [sellers, setSellers] = useState<Array<Seller>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSellers()
      .then((sellers) => setSellers(sellers))
      .catch(console.error);

    searchImages(query)
      .then((response) => {
        if (response?.photos) {
          setImages(response?.photos);
          setIsLoading(false);
        }
      })
      .catch(console.error);
  }, [query]);

  return (
    <Layout customClassName="pt-3 pb-4">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-6">
            <h5 className="m-0">{`${t("search-results-title")} "${query}"`}</h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <Link to="/" className="button button--dark">
              {t("search-again")}
            </Link>
          </div>
        </div>

        <div className="row">
          {isLoading && !images?.length ? (
            skeletons.map((skeleton) => (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                key={skeleton}
              >
                <Instagram />
              </div>
            ))
          ) : !isLoading && !images?.length ? (
            <div className="col-12 pb-5">
              <p className="m-0">{t("search-results-no-images")}.</p>
              <Link to="/" className="button button--dark mt-4 d-inline-block">
                {t("back")}
              </Link>
            </div>
          ) : (
            !isLoading &&
            sellers?.length &&
            images?.length &&
            sellers?.map(
              (seller, index) =>
                seller.status === "active" && (
                  <div
                    className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                    key={seller.id}
                  >
                    <ImageCard
                      seller={seller}
                      image={images[index]?.src?.large}
                      index={index}
                    />
                  </div>
                )
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ImagesPage;
