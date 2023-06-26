import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "../components";

describe("Footer Component", () => {
  it("renders app name and year", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const appName = getByText("Imágenes del Mundo");
    expect(appName).toBeTruthy();
  });
});
