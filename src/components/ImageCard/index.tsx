import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { updateSellerLikes } from "../../services/api-alegra";
import { Seller, ImageCardProps } from "../../types";

import DefaultAvatar from "../../assets/default-avatar.jpeg";
import DefaultImage from "../../assets/default-image.svg";
import "./styles.scss";

const ImageCard = ({ seller, index, image = "" }: ImageCardProps) => {
  const { t } = useTranslation();
  const { VITE_APP_AVATAR_URL: avatarUrl } = import.meta.env;
  const showDefaultAvatar = (event: React.ChangeEvent<HTMLImageElement>) =>
    (event.target.src = DefaultAvatar);

  const showDefaultImage = (event: React.ChangeEvent<HTMLImageElement>) =>
    (event.target.src = DefaultImage);

  const handleLike = ({ id, name, observations }: Seller) => {
    const likes = observations || "0";

    updateSellerLikes({
      id,
      name,
      observations: `${parseInt(likes) + 1}`,
    })
      .then(console.log)
      .catch(console.error);
  };

  useEffect(() => {
    const image = document.querySelector(`#image-${index}`);
    const bigHeart = document.querySelector(`#big-heart-${index}`);
    image?.addEventListener("dblclick", () => {
      handleLike({
        id: seller.id,
        name: seller.name,
        observations: seller.observations || "0"
      });

      bigHeart?.classList.add("like");
      setTimeout(() => {
        bigHeart?.classList.remove("like");
      }, 1000);
    });
  }, []);

  return (
    <div className="image-card pt-2">
      <div className="image-card__author ps-2 d-flex align-items-center">
        <picture className="author__avatar me-2">
          <img
            src={`${avatarUrl}/70?img=${seller.id}`}
            alt={seller.name}
            onError={showDefaultAvatar}
            height={35}
          />
        </picture>

        <p className="m-0 author__name">
          <small>{seller.name}</small>
        </p>
      </div>

      <div className="image-card__image mt-2" id={`image-${index}`}>
        <i
          className="bi bi-heart-fill big-heart me-2"
          id={`big-heart-${index}`}
        ></i>

        <picture className="image__container">
          <img src={image} alt="image" onError={showDefaultImage} />
        </picture>

        <div className="image__options">
          <button
            className="image__btn image__btn-like d-flex align-items-center"
            onClick={() => handleLike({
              id: seller.id,
              name: seller.name,
              observations: seller.observations || "0"
            })}
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
