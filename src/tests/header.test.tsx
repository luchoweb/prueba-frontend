import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../redux/store";
import { BrowserRouter } from "react-router-dom";

import { Header } from "../components";

describe("Header Component", () => {
  it("renders app name, button and language selector", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const appName = getByText(/Imágenes del Mundo/i);
    const headerButton = getByText(/login/);
    const langSelect = getByTestId("lang-selector");

    expect(appName).toBeTruthy();
    expect(headerButton).toBeTruthy();
    expect(langSelect).toBeTruthy();
  });
});
