// ProductsPage.tsx
import ProductsGrid from "./_components/ProductsGrid";
import SearchInput from "./_components/SearchInput";

const ProductsPage = () => {
  return (
    <div className="container mx-auto my-5 px-10 h-screen">
      <div className="bg-white border border-border shadow-custom rounded-2xl h-screen">
        <div className="flex flex-col h-full">
          <SearchInput />
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
