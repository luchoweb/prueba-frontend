import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "../redux/store";

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

    const appName = getByText("Imágenes del Mundo");
    const loginBtn = getByText("login");
    const langSelect = getByTestId("lang-selector");

    expect(appName).toBeTruthy();
    expect(loginBtn).toBeTruthy();
    expect(langSelect).toBeTruthy();
  });
});
