import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getInvoices } from "../../../services/api-alegra";
import { Invoice } from "../../../types";

import { SkeletonTable } from "../../Skeletons";
import InvoiceRow from "./InvoiceRow";

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
          <SkeletonTable />
        </div>
      ) : !invoices?.length ? (
        <p>{t("invoices-not-found")}</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">{t("invoice")} #</th>
                <th scope="col">{t("products")} ({t("qty")})</th>
                <th scope="col">{t("seller")}</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <InvoiceRow invoice={invoice} key={invoice.id} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Invoices;
