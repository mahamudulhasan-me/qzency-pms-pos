import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Plus } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { _id, image, name, price, stock } = product;
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (stock === 0) {
      toast.error("Out of stock");
    }
    dispatch(
      addToCart({
        _id,
        name,
        price,
        quantity: 1,
        image,
      })
    );
    toast.success("Added to cart");
  };
  return (
    <div className="border hover:shadow-custom transition-shadow border-border rounded-lg overflow-hidden group min-h-fit">
      <Image
        src={image}
        alt=""
        width={500}
        height={500}
        className="md:w-[256px] h-[172px] object-cover"
      />
      <div className="p-3 font-[500] border-t border-border">
        <h6 className="text-slate-900">{name}</h6>
        <p className="text-red-600">${price}.00</p>
        <div className="flex items-center justify-between">
          <p className="text-slate-600 text-sm">{stock} in stock</p>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-x-1 px-2 py-1.5 bg-slate-200 rounded-md text-slate-900 text-sm hover:bg-primary hover:text-white transition-all"
          >
            <Plus strokeWidth={1.5} size={18} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
