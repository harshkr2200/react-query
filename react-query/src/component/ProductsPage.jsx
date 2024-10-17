import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getDataFn } from "../common/getDataFn";
import { updateDataFn } from "../common/UpdateDataFn";

const ProductsPage = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return getDataFn("https://dummyjson.com/products");
    },
    staleTime: 10000,
  });

  const mutation = useMutation({
    mutationFn: (value) =>
      updateDataFn(`https://dummyjson.com/products/2`, {
        method: "PUT",
        headers: {
          // Changed 'herders' to 'headers'
          "Content-Type": "application/json", // Ensure 'Content-Type' is capitalized properly
        },
        body: JSON.stringify(value), // Added missing comma after headers block
      }),
    onSuccess: () => {
      // Invalidate and refetch
      QueryClient.invalidateQueries({ queryKey: ["products"] }); // Ensure QueryClient is correctly referenced
    },
  });

  if (isLoading) {
    <h1 className="text-center">Loading....</h1>;
  }

  if (isError) {
    <h2>Error: something went wrong</h2>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <button
          onClick={() => {
            mutation.mutate({
              title: "hello world",
            });
          }}
        >
          Please update your sheet
        </button>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products &&
            products.products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product-page-details/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.stock}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
