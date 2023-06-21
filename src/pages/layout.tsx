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
      <Header />
      <section className={`${customClassName || ""}`}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
