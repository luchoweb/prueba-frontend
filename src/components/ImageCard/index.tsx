import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getSellerLikes, updateSellerLikes } from "../../services/api-alegra";
import { Seller, ImageCardProps } from "../../types";

import { Avatar } from "..";
import { showDefaultImage } from "../../utils/defaultImages";

import "./styles.scss";

const ImageCard = ({ seller, image = "" }: ImageCardProps) => {
  const { t } = useTranslation();
  // Almacenar en store con REDUX
  const currentLikes = parseInt(`${seller.observations}`);
  const likeHeartClassName = "image__btn-like--liked";

  const handleLike = async ({ id, name }: Seller) => {
    const smallHeart = document.querySelector(`#small-heart-${id}`);
    const hasLiked = smallHeart?.classList.contains(likeHeartClassName);

    !hasLiked
      ? smallHeart?.classList.add(likeHeartClassName)
      : smallHeart?.classList.remove(likeHeartClassName);
    
    const sellerLikes = await getSellerLikes(id);
    const newCountLikes = !hasLiked ? sellerLikes + 1 : sellerLikes - 1;

    updateSellerLikes({
      id,
      name,
      observations: `${newCountLikes}`,
    })
      .then((seller) => {
        const sellerLikes = parseInt(`${seller.observations}`);
        if ( currentLikes < 20 && sellerLikes === 20) {
          // Si completó los 20 likes creamos la factura
        }
        console.log(seller);
      })
      .catch(console.error);
  };

  useEffect(() => {
    const image = document.querySelector(`#image-${seller.id}`);
    const bigHeart = document.querySelector(`#big-heart-${seller.id}`);
    image?.addEventListener("dblclick", () => {
      handleLike({
        id: seller.id,
        name: seller.name
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
