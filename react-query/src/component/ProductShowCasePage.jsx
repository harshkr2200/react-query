import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getDataFn } from "../common/getDataFn";

const ProductShowCasePage = () => {
  const params = useParams();
  const { productId } = params;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product_data", productId],
    queryFn: () => getDataFn(`https://dummyjson.com/product/${productId}`),
  });

  if (isLoading) {
    <h1 className="text-center text-2xl text-yellow-50">Loading....</h1>;
  }

  if (isError) {
    <h1 className="text-center text-2xl text-yellow-50">
      Erorr : {isError.message}
    </h1>;
  }

  return (
    <>
      <div>Product page : Title = {data?.title}</div>
      <button>Update product</button>
    </>
  );
};

export default ProductShowCasePage;
