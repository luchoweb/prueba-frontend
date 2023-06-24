import { useTranslation } from "react-i18next";

import { Header, Sellers } from "../../components/Dashboard";
import Layout from "../layout";

const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
     <div className="container pt-4 pb-4">
      <Header />

      <hr />

      <section className="sellers mt-4 mb-4">
        <h5 className="mb-4">{t("sellers")}</h5>
        <Sellers />
      </section>

      <section className="invoices">
        <h5 className="mb-4">{t("invoices")}</h5>
      </section>
     </div>
    </Layout>
  );
}

export default DashboardPage;
