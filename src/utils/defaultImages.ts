import DefaultAvatar from "../assets/default-avatar.jpeg";
import DefaultImage from "../assets/default-image.svg";

export const showDefaultAvatar = (event: React.ChangeEvent<HTMLImageElement>) =>
  (event.target.src = DefaultAvatar);

export const showDefaultImage = (event: React.ChangeEvent<HTMLImageElement>) =>
  (event.target.src = DefaultImage);
