import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getSellerLikes, updateSellerLikes } from "../../services/api-alegra";
import { hasPhotoLiked, showLikeEffects } from "../../utils/likes";
import { Seller, ImageCardProps } from "../../types";

import { Avatar } from "..";
import { showDefaultImage } from "../../utils/defaultImages";

import "./styles.scss";

const ImageCard = ({ seller, image = "" }: ImageCardProps) => {
  const { t } = useTranslation();

  const handleLike = async ({ id, name }: Seller) => {
    if (hasPhotoLiked(id)) return;

    showLikeEffects(id);

    const sellerLikes = await getSellerLikes(id);

    updateSellerLikes({
      id,
      name,
      observations: `${sellerLikes + 1}`,
    })
      .then((seller) => {
        const currentLikes = parseInt(`${seller.observations}`);
        if (currentLikes === 20) {
          // Si completó los 20 likes creamos la factura
          console.log("Carrera Ganada!");
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    const photo = document.querySelector(`#image-${seller.id}`);

    photo?.addEventListener("dblclick", () => {
      handleLike({
        id: seller.id,
        name: seller.name,
      });
    });

    return () => photo?.removeEventListener("dblclick", () => {});
  }, []);

  return (
    <div className="image-card pt-2">
      <div className="image-card__author ps-2 d-flex align-items-center">
        <picture className="author__avatar me-2">
          <Avatar height={35} seller={seller} />
        </picture>

        <p className="m-0 author__name">
          <small>{seller.name}</small>
        </p>
      </div>

      <div className="image-card__image mt-2" id={`image-${seller.id}`}>
        <i
          className="bi bi-heart-fill big-heart me-2"
          id={`big-heart-${seller.id}`}
        ></i>

        <picture className="image__container">
          <img src={image} alt="image" onError={showDefaultImage} />
        </picture>

        <div className="image__options">
          <button
            id={`small-heart-${seller.id}`}
            className="image__btn image__btn-like d-flex align-items-center"
            onClick={() =>
              handleLike({
                id: seller.id,
                name: seller.name,
              })
            }
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
