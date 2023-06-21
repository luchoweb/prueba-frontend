import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  customClassName?: string;
  children: ReactNode;
};

const Layout = ({ children, customClassName }: Props) => {
  return (
    <main className="layout">
      <div className="layout__container">
        <Header />
        <section className={`${customClassName || ""}`}>{children}</section>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
