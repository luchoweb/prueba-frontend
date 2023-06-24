import { Avatar } from "../..";
import { SellerCardProps } from "../../../types";

const SellerCard = ({ seller }: SellerCardProps) => {
  const totalLikesToWin = 20;
  const currentLikes = parseInt(`${seller.observations}`) || 0;
  const likesToWin = totalLikesToWin - currentLikes;
  const percentToWin = (currentLikes / totalLikesToWin) * 100;

  return (
    <div className="card seller p-0">
      <Avatar
        seller={seller}
        customClassName="object-fit-cover card-img-top"
        height={250}
      />
      <div className="card-body">
        <h5 className="seller-name m-0 mb-3">{seller.name}</h5>

        <p className="m-0 mb-2">
          <strong>Progreso de Likes</strong>:
        </p>

        <div className="alert alert-light mb-0 p-2">
          <p className="seller-likes mb-0">
          <strong>Obtenidos</strong>: {currentLikes}
        </p>
        <p className="m-0 mb-2"><strong>Pendientes</strong>: {likesToWin}</p>

        <div className="row align-items-center">
          <div className="col-10 col-lg-9 pe-0">
            <div className="progress" role="progressbar">
              <div
                className="progress-bar text-bg-dark"
                style={{ width: `${percentToWin}%` }}
              ></div>
            </div>
          </div>

          <div className="col-2 col-lg-3 ps-0 text-end">
            <p className="m-0">{percentToWin}%</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
