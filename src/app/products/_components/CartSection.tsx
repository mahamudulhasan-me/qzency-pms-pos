"use client";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  Banknote,
  CreditCard,
  HandCoins,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const paymentMethods = [
  {
    id: 1,
    name: "Cash",
    icons: <HandCoins size={16} strokeWidth={1} absoluteStrokeWidth />,
  },
  {
    id: 2,
    name: "Card",
    icons: <CreditCard size={16} strokeWidth={1.5} absoluteStrokeWidth />,
  },
  {
    id: 3,
    name: "Later",
    icons: <Banknote size={16} strokeWidth={1.5} absoluteStrokeWidth />,
  },
];

const CartSection = () => {
  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(
    undefined
  );
  const { cartItems, totalPrice, totalQuantity } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${
        totalQuantity ? "block" : "hidden"
      } w-1/4 bg-white border border-border shadow-custom rounded-xl `}
    >
      <div className="px-4 py-2 border-b border-border flex items-center justify-between">
        <h1 className=" font-semibold">Cart Items</h1>
        <button
          onClick={() => dispatch(clearCart())}
          className="text-slate-500 underline"
        >
          Clear All
        </button>
      </div>
      <div className="">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border-b p-3"
          >
            <div className="flex items-center space-x-2">
              <figure className="ring ring-border rounded-md">
                <Image
                  src={item.image || ""}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-12 h-12 object-cover rounded"
                />
              </figure>
              <div>
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="font-medium">
                  ${item.price.toFixed(2)}
                  <span className="text-sm line-through text-slate-500 ml-2">
                    ${22.0}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => dispatch(removeFromCart(item._id))}
                className="text-slate-500 hover:text-rose-600 transition-all"
              >
                <Trash2 size={16} />
              </button>
              <div className="flex items-center gap-x-1 bg-slate-200 rounded-md">
                <button
                  disabled={item.quantity === 1}
                  onClick={() => dispatch(decreaseQuantity(item._id))}
                  className="p-2 rounded-md hover:bg-slate-300 "
                >
                  <Minus size={18} strokeWidth={1} absoluteStrokeWidth />
                </button>
                {item.quantity}{" "}
                <button
                  onClick={() => dispatch(increaseQuantity(item._id))}
                  className="p-2 rounded-md hover:bg-slate-300 transition-all"
                >
                  <Plus size={18} strokeWidth={1} absoluteStrokeWidth />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-semibold text-slate-900">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Discount</span>
          <span className="font-semibold text-slate-900">
            -${Number(5).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Taxes</span>
          <span className="font-semibold text-slate-900">
            -${Number(323).toFixed(2)}
          </span>
        </div>
      </div>
      <div className=" p-4 border-b border-border">
        <h6 className="font-semibold text-slate-700">Select Payment</h6>
        <div className="flex items-center justify-between mt-1">
          {paymentMethods.map((method) => (
            <div
              onClick={() => setPaymentMethod(method.name)}
              key={method.id}
              className={`${
                paymentMethod === method.name
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border"
              } border cursor-pointer  p-2 flex items-center gap-x-1 text-sm text-slate-700 rounded-md`}
            >
              <input
                type="radio"
                name="payment"
                id={method.name}
                value={method.name}
                checked={paymentMethod === method.name}
              />
              <span>{method.icons}</span> {method.name}
            </div>
          ))}
        </div>
      </div>

      <div className=" p-4 border-b border-border">
        <div className="flex items-start justify-between">
          <h6 className=" flex flex-col">
            <span className="font-semibold text-slate-700">Total Payment</span>
            <span className="text-slate-700 text-sm">
              Total ({totalQuantity} items)
            </span>
          </h6>
          <span className="font-bold text-xl text-slate-900">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <button className="bg-primary text-center font-semibold mt-4 w-full text-white py-3 rounded-lg">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartSection;
