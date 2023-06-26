import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';

import { store } from "./redux/store";
import { ErrorBoundary } from "./components";

import App from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
