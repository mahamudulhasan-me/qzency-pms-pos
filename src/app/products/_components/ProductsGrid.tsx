/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { useGetProductsQuery } from "@/redux/product/productsApiSlice";
import { RootState } from "@/redux/store"; // Adjust import path as needed
import { Frown, Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const [page, setPage] = useState(1);
  const loadingRef = useRef(null);

  // Get keyword from Redux store
  const keyword = useSelector(
    (state: RootState) => state.productFilter.keyword
  );

  // Pass keyword to query
  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    page,
    limit: 24,
    keyword,
  });

  const hasMorePages =
    //@ts-ignore
    products?.pagination.currentPage < products?.pagination.totalPages;

  useEffect(() => {
    // Reset page when keyword changes
    setPage(1);
  }, [keyword]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && hasMorePages) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    const currentLoadingRef = loadingRef.current;
    if (currentLoadingRef) {
      observer.observe(currentLoadingRef);
    }

    return () => {
      if (currentLoadingRef) {
        observer.unobserve(currentLoadingRef);
      }
    };
  }, [isFetching, hasMorePages]);

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
        <div
          ref={loadingRef}
          className="col-span-6 h-10 flex items-center justify-center"
        >
          {isFetching && (
            <p className="flex items-center gap-x-1 font-semibold text-slate-600">
              <Loader className="animate-spin" strokeWidth={1.5} /> Load More
              Products ...
            </p>
          )}
          {!hasMorePages && products?.data.length === 0 && (
            <p className="text-rose-600 flex items-center gap-x-1">
              Oops! Products Not Found <Frown strokeWidth={1.5} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
