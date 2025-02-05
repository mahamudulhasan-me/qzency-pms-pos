import { QrCode, Search } from "lucide-react";
const SearchInput = () => {
  return (
    <div className="p-5">
      <form
        action=""
        className="w-full border border-border shadow-custom rounded-xl p-3 flex items-center gap-x-3 text-slate-500"
      >
        <Search size={20} />
        <input
          type="input"
          name="search"
          id=""
          placeholder="Search products..."
          className="w-full focus:outline-none"
        />
        <QrCode />
      </form>
    </div>
  );
};

export default SearchInput;
