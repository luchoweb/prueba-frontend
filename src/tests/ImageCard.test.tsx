import { render } from "@testing-library/react";
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

    const sellerName = getByTestId("seller-name");
    const photo = getByTestId("photo");

    expect(sellerName).toBeTruthy();
    expect(photo).toBeTruthy();
  });
});
