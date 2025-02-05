import ProductsGrid from "./_components/ProductsGrid";
import SearchInput from "./_components/SearchInput";

const ProductsPage = () => {
  return (
    <div className="container mx-auto my-5 px-10 ">
      <div className="bg-white border relative border-border shadow-custom rounded-2xl">
        <SearchInput />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default ProductsPage;
