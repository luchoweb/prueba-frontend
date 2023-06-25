import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  createInvoice,
  getSellerLikes,
  getSellers,
  getTotalSellersLikes,
  updateSellerLikes,
} from "../../services/api-alegra";
import { hasPhotoLiked, showLikeEffects } from "../../utils/likes";
import { Seller, ImageCardProps, InvoiceProduct } from "../../types";

import { Avatar } from "..";
import { showDefaultImage } from "../../utils/defaultImages";

import "./styles.scss";

const ImageCard = ({ seller, image = "" }: ImageCardProps) => {
  const { t } = useTranslation();

  const handleLike = async (seller: Seller) => {
    if (hasPhotoLiked(seller.id)) return;

    showLikeEffects(seller.id);

    const sellers = await getSellers();

    const isRaceOver = sellers.filter(
      (seller: Seller) => parseInt(`${seller.observations}`) >= 20
    ).length;

    const sellerLikes = await getSellerLikes(seller.id);

    updateSellerLikes({
      id: seller.id,
      name: seller.name,
      observations: `${sellerLikes + 1}`,
    })
      .then(async (seller) => {
        const currentLikes = parseInt(`${seller.observations}`);

        if (!isRaceOver && currentLikes === 20) {
          const totalSellersLikes = sellers.reduce(
            (accumulator: number, seller: Seller) => {
              return accumulator + parseInt(`${seller.observations}`);
            },
            0
          );

          const product: InvoiceProduct = {
            id: 1,
            price: 0,
            quantity: totalSellersLikes,
          };

          const date = new Date().toLocaleDateString('es').split('/').reverse().join('-');

          console.log("¡Carrera Ganada!");

          createInvoice({
            items: [product],
            client: 5,
            dueDate: date,
            date,
            seller: seller.id,
          })
            .then(console.log)
            .catch(console.error);
        }
      })
      .catch(console.error);
  };

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
