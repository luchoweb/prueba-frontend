const likeHeartClassName = "image__btn-like--liked";

export const hasPhotoLiked = (id: string) => {
  const smallHeart = document.querySelector(`#small-heart-${id}`);
  const hasLiked = smallHeart?.classList.contains(likeHeartClassName);

  return hasLiked;
}

export const showLikeEffects = (id: string) => {
  showBigHeart(id);

  const smallHeart = document.querySelector(`#small-heart-${id}`);

  !hasPhotoLiked(id)
    ? smallHeart?.classList.add(likeHeartClassName)
    : smallHeart?.classList.remove(likeHeartClassName);
}

const showBigHeart = (id: string) => {
    const bigHeart = document.querySelector(`#big-heart-${id}`);

    bigHeart?.classList.add("like");
    setTimeout(() => {
      bigHeart?.classList.remove("like");
    }, 1000);
  };