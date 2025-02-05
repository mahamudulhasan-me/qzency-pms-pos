"use client";

import { useGetProductsQuery } from "@/redux/product/productsApiSlice";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { data: products, isLoading } = useGetProductsQuery({});
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-t border-border p-5 grid grid-cols-6 gap-5">
      {products?.data.map((product: IProduct) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
