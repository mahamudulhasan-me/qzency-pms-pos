"use client";
import {
  clearKeyword,
  setKeyword,
} from "@/redux/features/product/productFilterSlice";
import { debounce } from "lodash";
import { QrCode, Search, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  // Create a memoized debounced function
  const debouncedDispatch = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setKeyword(value));
      }, 500),
    [dispatch]
  );

  // Stable callback for input change
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);

      // Only dispatch if there's a value
      if (value.trim()) {
        debouncedDispatch(value);
      } else {
        // Immediately clear keyword if input is empty
        debouncedDispatch.cancel();
        dispatch(setKeyword(""));
      }
    },
    [debouncedDispatch, dispatch]
  );
  const handleClearValue = () => {
    setSearchValue("");
    dispatch(clearKeyword());
  };
  return (
    <div className="p-5">
      <form className="w-full border border-border shadow-custom rounded-xl p-3 flex items-center gap-x-3 text-slate-500">
        <Search size={20} />
        <input
          type="input"
          name="search"
          placeholder="Search products..."
          value={searchValue}
          onChange={handleInputChange}
          className="w-full focus:outline-none"
        />
        <button type="button">
          {searchValue ? <X onClick={handleClearValue} /> : <QrCode />}
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
