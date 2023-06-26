import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "../components";

describe("Header Component", () => {
  it("renders app name and button", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const appName = getByText(/Imágenes del Mundo/i);
    const headerButton = getByText(/login/);

    expect(appName).toBeTruthy();
    expect(headerButton).toBeTruthy();
  });
});
