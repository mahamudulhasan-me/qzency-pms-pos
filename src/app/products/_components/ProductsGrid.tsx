"use client";
import { useGetProductsQuery } from "@/redux/product/productsApiSlice";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { data: products, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 min-h-0">
      <div
        className="border-t border-border p-5 grid grid-cols-6 gap-5 h-full overflow-y-auto content-start
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        [&::-webkit-scrollbar-thumb:hover]:bg-gray-400"
      >
        {products?.data.map((product: IProduct) => (
          <div key={product._id} className="h-fit">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
