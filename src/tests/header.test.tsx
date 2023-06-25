import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "../components";

describe("Header", () => {
  it("renders app name", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const appName = screen.getByText(/Imágenes del Mundo/i);
    expect(appName).toBeTruthy();
  });
});
