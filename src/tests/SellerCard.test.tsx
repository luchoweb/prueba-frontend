import { render } from "@testing-library/react";
import { Seller } from "../types";

import SellerCard from '../components/Dashboard/Sellers/SellerCard';

import sellerMock from "./mocks/seller.json";


describe("SellerCard Component", () => {
  it("renders seller name and likes info", () => {
    const seller = sellerMock as unknown as Seller;

    const { getByTestId } = render(
      <SellerCard seller={seller} />
    );

    const sellerName = getByTestId("seller-name");
    const likesEarned = getByTestId("likes-earned");
    const likesRemaining = getByTestId("remaining-likes");

    expect(sellerName).toBeTruthy();
    expect(likesEarned).toBeTruthy();
    expect(likesRemaining).toBeTruthy();
  });
});
