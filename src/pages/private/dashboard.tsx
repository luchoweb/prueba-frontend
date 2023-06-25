import { useTranslation } from "react-i18next";

import { Header, Sellers, Invoices } from "../../components/Dashboard";
import Layout from "../layout";

const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
     <div className="container pt-4 pb-4">
      <Header />
      
      <hr />
      
      <section className="sellers mt-4 mb-4">
        <h5 className="mb-4">
          <i className="bi bi-people me-2"></i>
          <span>{t("sellers")}</span>
        </h5>
        <Sellers />
      </section>

      <section className="invoices">
        <h5 className="mb-4">
          <i className="bi bi-receipt me-2"></i>
          <span>{t("invoices")}</span>
        </h5>
        <Invoices />
      </section>
     </div>
    </Layout>
  );
}

export default DashboardPage;
