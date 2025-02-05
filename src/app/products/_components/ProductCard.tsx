import { Plus } from "lucide-react";
import Image from "next/image";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { image, name, price, stock } = product;
  return (
    <div className="border shadow-custom border-border rounded-lg overflow-hidden">
      <Image
        src={image}
        alt=""
        width={500}
        height={500}
        className="w-[256px] h-[172px] object-cover "
      />
      <div className="p-3 font-[500] border-t border-border">
        <h6 className="text-slate-900">{name}</h6>
        <p className="text-red-600">${price}</p>
        <div className="flex items-center justify-between">
          <p className="text-slate-600 text-sm">{stock} in stock</p>
          <button className="flex items-center gap-x-1 px-2 py-1.5 bg-slate-200 rounded-md text-slate-900 text-sm hover:bg-primary hover:text-white transition-all">
            <Plus strokeWidth={1.5} size={18} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
