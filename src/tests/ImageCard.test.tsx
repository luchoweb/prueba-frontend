import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Seller } from "../types";

import { ImageCard } from "../components";

import sellerMock from "./mocks/seller.json";

describe("ImageCard Component", () => {
  it("renders photo and seller name", () => {
    const seller = sellerMock as unknown as Seller;
    const image = "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg";

    const { getByTestId } = render(
      <ImageCard seller={seller} image={image} />
    );

    const appName = getByTestId("seller-name");
    const sellerName = getByTestId("photo");

    expect(appName).toBeTruthy();
    expect(sellerName).toBeTruthy();
  });
});
