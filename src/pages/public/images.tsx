import { useParams } from "react-router-dom";

import ImageCard from "../../components/ImageCard";
import Layout from "../layout";

import Vendors from "../../tests/mocks/vendors.json";

const ImagesPage = () => {
  const { query = "flowers" } = useParams();

  return (
    <Layout customClassName="pt-3 pb-4">
      <div className="row">
        {Array.from(Vendors).map((vendor, index) => (
          <div className="col-12 col-lg-6 mb-4" key={vendor.id}>
            <ImageCard vendor={vendor} query={query} index={index} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default ImagesPage;
