import "./styles.scss";

const Footer = () => {
  const { VITE_APP_NAME: appName } = import.meta.env;

  return (
    <footer className="pt-3 pb-2">
      <div className="container">
        <p className="m-0">
          <small>&copy; {`${new Date().getFullYear()} ${appName}`}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
