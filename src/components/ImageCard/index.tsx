import { useEffect, useState } from "react";
//import { searchImages } from "../../services/google-api";
import { VendorProps } from "../../types";

type Props = {
  vendor: VendorProps;
  query: string;
  index: number;
};

import DefaultAvatar from "../../assets/default-avatar.jpeg";
import DefaultPhoto from "../../assets/default-photo.jpg";
import "./styles.scss";

import Images from "../../tests/mocks/images.json";

const ImageCard = ({ vendor, query, index }: Props) => {
  const { VITE_APP_AVATAR_URL: avatarUrl } = import.meta.env;
  const showDefaultAvatar = (event: React.ChangeEvent<HTMLImageElement>) =>
    (event.target.src = DefaultAvatar);

  const showDefaultPhoto = (event: React.ChangeEvent<HTMLImageElement>) =>
    (event.target.src = DefaultPhoto);

  const [photo, setPhoto] = useState(Images.items[index].link);

  useEffect(() => {
    const photos = document.querySelectorAll(".image-card__photo");
    photos.forEach((photo, index) => {
      const bigHeart = document.querySelector(`#big-heart-${index}`);
      photo?.addEventListener("dblclick", () => {
        bigHeart?.classList.add("like");

        setTimeout(() => {
          bigHeart?.classList.remove("like");
        }, 1000);
      });
    });
  }, []);

  /*searchImages(query, index)
    .then(image => setPhoto(image.link || ""))
    .catch(console.error);*/

  return (
    <div className="image-card pt-2">
      <div className="image-card__author ps-2 d-flex align-items-center">
        <picture className="author__avatar me-2">
          <img
            src={`${avatarUrl}/80?img=${vendor.avatar}`}
            alt={vendor.name}
            onError={showDefaultAvatar}
            height={40}
          />
        </picture>

        <p className="m-0 author__name">{vendor.name}</p>
      </div>

      <div className="image-card__photo mt-2">
        <i
          className="bi bi-heart-fill big-heart me-2"
          id={`big-heart-${index}`}
        ></i>

        <picture className="photo__container">
          <img src={photo} alt={query} onError={showDefaultPhoto} />
        </picture>

        <button className="photo__btn-like d-flex align-items-center">
          <i className="bi bi-heart-fill me-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
