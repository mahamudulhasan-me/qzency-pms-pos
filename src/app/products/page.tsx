"use client";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import CartSection from "./_components/CartSection";
import ProductsGrid from "./_components/ProductsGrid";
import SearchInput from "./_components/SearchInput";

const ProductsPage = () => {
  const { isEnabled } = useAppSelector((state) => state.enablePOSystem);
  const navigate = useRouter();
  if (!isEnabled) {
    navigate.push("/");
  }
  const { totalQuantity } = useAppSelector((state) => state.cart);
  return (
    <div
      className={`container mx-auto my-5 ${
        totalQuantity
          ? "px-4 flex items-start justify-between gap-x-4"
          : "px-10"
      } h-screen`}
    >
      <div
        className={`bg-white border border-border shadow-custom rounded-2xl h-screen ${
          totalQuantity ? "w-3/4 " : "w-full"
        }`}
      >
        <div className={`flex flex-col h-full `}>
          <SearchInput />
          <ProductsGrid />
        </div>
      </div>
      <CartSection />
    </div>
  );
};

export default ProductsPage;
