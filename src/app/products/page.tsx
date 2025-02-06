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
          ? "md:px-4 flex md:flex-row flex-col items-start justify-between gap-x-4"
          : "md:px-10 px-4"
      } h-screen`}
    >
      <div
        className={`bg-white border  border-border shadow-custom rounded-2xl h-screen ${
          totalQuantity ? "md:w-3/4 w-full " : "w-full"
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
