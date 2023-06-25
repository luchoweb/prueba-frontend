import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getInvoices } from "../../../services/api-alegra";
import { Invoice } from "../../../types";

import { SkeletonCard } from "../../Skeletons";
import InvoiceCard from "./InvoiceCard";

const Invoices = () => {
  const { t } = useTranslation();
  const [invoices, setInvoices] = useState<Array<Invoice>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getInvoices()
      .then((response) => {
        setInvoices(response);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="invoices-list row">
      {isLoading ? (
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <SkeletonCard />
        </div>
      ) : !invoices?.length ? (
        <p>{t("invoices-not-found")}</p>
      ) : (
        invoices.map((invoice) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={invoice.id}>
            <InvoiceCard invoice={invoice} />
          </div>
        ))
      )}
    </div>
  );
};

export default Invoices;
