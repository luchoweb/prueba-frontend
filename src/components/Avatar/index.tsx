import { showDefaultAvatar } from "../../utils/defaultImages";

import { AvatarProps } from "../../types";

const Avatar = ({ seller, height = 70, customClassName = "avatar" }: AvatarProps) => {
  const { VITE_APP_AVATAR_URL: avatarUrl } = import.meta.env;

  return (
    <img
      src={`${avatarUrl}/${height}?img=${seller.id}`}
      alt={seller.name}
      onError={showDefaultAvatar}
      height={height}
      className={`${customClassName}`}
    />
  );
};

export default Avatar;
