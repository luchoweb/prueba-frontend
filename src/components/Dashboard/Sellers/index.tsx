import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getSellers } from "../../../services/api-alegra";
import { Seller } from "../../../types";

import { SkeletonCard } from "../../Skeletons";
import SellerCard from "./SellerCard";

const Sellers = () => {
  const { t } = useTranslation();
  const [sellers, setSellers] = useState<Array<Seller>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSellers()
      .then((response) => {
        setSellers(response);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="sellers-list row">
      {isLoading ? (
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <SkeletonCard />
        </div>
      ) : !sellers?.length ? (
        <p>{t("sellers-not-found")}</p>
      ) : (
        sellers.map((seller) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={seller.id}>
            <SellerCard seller={seller} />
          </div>
        ))
      )}
    </div>
  );
};

export default Sellers;
