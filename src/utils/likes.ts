import {
  createInvoice,
  getSellerLikes,
  getSellers,
  updateSellerLikes,
} from "../services/api-alegra";
import { InvoiceProduct, Seller } from "../types";

const likeHeartClassName = "image__btn-like--liked";

export const hasPhotoLiked = (id: string) => {
  const smallHeart = document.querySelector(`#small-heart-${id}`);
  const hasLiked = smallHeart?.classList.contains(likeHeartClassName);

  return hasLiked;
};

export const showLikeEffects = (id: string) => {
  showBigHeart(id);

  const smallHeart = document.querySelector(`#small-heart-${id}`);

  !hasPhotoLiked(id)
    ? smallHeart?.classList.add(likeHeartClassName)
    : smallHeart?.classList.remove(likeHeartClassName);
};

const showBigHeart = (id: string) => {
  const bigHeart = document.querySelector(`#big-heart-${id}`);

  bigHeart?.classList.add("like");
  setTimeout(() => {
    bigHeart?.classList.remove("like");
  }, 1000);
};

export const handleLike = async (seller: Seller) => {
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
          quantity: totalSellersLikes + 1,
        };

        const date = new Date()
          .toLocaleDateString("es")
          .split("/")
          .reverse()
          .join("-");

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
