import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { handleLike } from "../../utils/likes";
import { ImageCardProps } from "../../types";

import { Avatar } from "..";
import { showDefaultImage } from "../../utils/defaultImages";

import "./styles.scss";

const ImageCard = ({ seller, image = "" }: ImageCardProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    const photo = document.querySelector(`#image-${seller.id}`);
    photo?.addEventListener("dblclick", () => {
      handleLike(seller);
    });

    return () => photo?.removeEventListener("dblclick", () => {});
  }, []);

  return (
    <div className="image-card pt-2">
      <div className="image-card__author ps-2 d-flex align-items-center">
        <picture className="author__avatar me-2">
          <Avatar height={35} seller={seller} />
        </picture>

        <p className="m-0 author__name" data-testid="seller-name">
          <small>{seller.name}</small>
        </p>
      </div>

      <div className="image-card__image mt-2" id={`image-${seller.id}`}>
        <i
          className="bi bi-heart-fill big-heart me-2"
          id={`big-heart-${seller.id}`}
        ></i>

        <picture className="image__container" data-testid="photo">
          <img src={image} alt="image" onError={showDefaultImage} />
        </picture>

        <div className="image__options">
          <button
            id={`small-heart-${seller.id}`}
            className="image__btn image__btn-like d-flex align-items-center"
            onClick={() => handleLike(seller)}
          >
            <i className="bi bi-heart-fill me-2"></i>
            <span className="me-3">{t("love")}</span>
          </button>

          <button className="image__btn">
            <i className="bi bi-cash me-2"></i>
            <span>{t("buy")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
