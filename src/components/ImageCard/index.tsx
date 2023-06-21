import { useEffect } from "react";
import { VendorProps } from "../../types";

type Props = {
  vendor: VendorProps;
  index: number;
  image?: string;
};

import DefaultAvatar from "../../assets/default-avatar.jpeg";
import DefaultImage from "../../assets/default-image.svg";
import "./styles.scss";

const ImageCard = ({ vendor, index, image = "" }: Props) => {
  const { VITE_APP_AVATAR_URL: avatarUrl } = import.meta.env;
  const showDefaultAvatar = (event: React.ChangeEvent<HTMLImageElement>) =>
    (event.target.src = DefaultAvatar);

  const showDefaultImage = (event: React.ChangeEvent<HTMLImageElement>) =>
    (event.target.src = DefaultImage);

  useEffect(() => {
    const images = document.querySelectorAll(".image-card__image");
    images.forEach((image, index) => {
      const bigHeart = document.querySelector(`#big-heart-${index}`);
      image?.addEventListener("dblclick", () => {
        bigHeart?.classList.add("like");

        setTimeout(() => {
          bigHeart?.classList.remove("like");
        }, 1000);
      });
    });
  }, []);

  return (
    <div className="image-card pt-2">
      <div className="image-card__author ps-2 d-flex align-items-center">
        <picture className="author__avatar me-2">
          <img
            src={`${avatarUrl}/70?img=${vendor.avatar}`}
            alt={vendor.name}
            onError={showDefaultAvatar}
            height={35}
          />
        </picture>

        <p className="m-0 author__name">
          <small>{vendor.name}</small>
        </p>
      </div>

      <div className="image-card__image mt-2">
        <i
          className="bi bi-heart-fill big-heart me-2"
          id={`big-heart-${index}`}
        ></i>

        <picture className="image__container">
          <img src={image} alt="image" onError={showDefaultImage} />
        </picture>

        <button className="image__btn-like d-flex align-items-center">
          <i className="bi bi-heart-fill me-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
