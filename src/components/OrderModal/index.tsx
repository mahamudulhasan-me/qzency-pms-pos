"use client";
import { useAppSelector } from "@/redux/hooks";
import { Download, MapPinHouse, PhoneCall, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface OrderModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const OrderModal = ({ open, setOpen }: OrderModalProps) => {
  const {
    address,
    discount,
    finalPrice,
    name,
    phoneNumber,
    products,
    subtotal,
    taxes,
  } = useAppSelector((state) => state.order);

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed inset-0 z-50 flex items-start justify-center`} // Changed items-center to items-start
    >
      {/* Backdrop with scroll */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto py-8" // Added overflow-y-auto and padding
      >
        {/* Modal Container - centered horizontally */}
        <div className="flex justify-center min-h-full">
          {/* Modal Content */}
          <div className="relative w-[586px] bg-white rounded-lg my-auto">
            {" "}
            {/* Added my-auto for vertical centering */}
            <div className="bg-white p-4 flex items-center justify-between rounded-t-lg">
              <div className="relative w-44 pb-5">
                <Link href={"/"}>
                  <Image
                    src={"/images/logo.svg"}
                    alt="logo"
                    width={120}
                    height={120}
                  />
                  <span className="text-sm absolute left-1 tracking-widest text-slate-500 font-semibold">
                    POINT OF SALE
                  </span>
                </Link>
              </div>
              <aside className="flex flex-col items-end">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  ✕
                </button>
                <div className="flex items-center gap-x-2">
                  <button className="flex items-center space-x-1 text-white font-semibold px-4 py-2 rounded-md bg-green-600 text-sm">
                    <span>Print Invoice</span>{" "}
                    <Printer size={16} strokeWidth={1} absoluteStrokeWidth />
                  </button>
                  <button className="flex items-center space-x-1 text-white font-semibold px-4 py-2 rounded-md bg-primary text-sm">
                    <span>Download</span>{" "}
                    <Download size={16} strokeWidth={1} absoluteStrokeWidth />
                  </button>
                </div>
              </aside>
            </div>
            {/* Content Area */}
            <div className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                  <PhoneCall
                    size={16}
                    strokeWidth={1}
                    absoluteStrokeWidth
                    className="size-7 bg-slate-200 p-2 text-gray-600 rounded-md"
                  />
                  <span className="text-slate-700 text-sm">{phoneNumber}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <MapPinHouse
                    size={16}
                    strokeWidth={1}
                    absoluteStrokeWidth
                    className="size-7 bg-slate-200 p-2 text-slate-600 rounded-md"
                  />
                  <span className="text-slate-700 text-sm">{address}</span>
                </div>
              </div>
              <div className="py-3 mt-3 border-y border-dashed border-[#717680]">
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-slate-700">Customer:</span>{" "}
                    <span>{name}</span>
                  </p>
                  <p>
                    <span className="text-slate-700">Invoice ID:</span>{" "}
                    <span>#0302254</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-slate-700">Phone:</span>{" "}
                    <span>{phoneNumber}</span>
                  </p>
                  <p>
                    <span className="text-slate-700">Date:</span>{" "}
                    <span>{new Date().toDateString()}</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-5 py-2 text-slate-800">
                  <span className="col-span-2">Item Description</span>
                  <span>Unit Price</span>
                  <span>Qty</span>
                  <span className="text-right">Total</span>
                </div>
                <div className="border-y border-dashed border-[#717680] py-3 space-y-2">
                  {products.map((item, index) => (
                    <div key={index} className="grid grid-cols-5">
                      <span className="col-span-2 text-slate-700">
                        {item.name}
                      </span>
                      <span>${item.price.toFixed(2)}</span>
                      <span>{item.quantity}</span>
                      <span className="text-right font-semibold">
                        ${Number(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-b border-dashed border-[#717680] text-slate-800 py-3 space-y-2">
                <p className="flex items-center justify-between ">
                  <span>Subtotal</span>{" "}
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </p>
                <p className="flex items-center justify-between ">
                  <span>Taxes (5%)</span>{" "}
                  <span className="font-semibold">${taxes.toFixed(2)}</span>
                </p>
                <p className="flex items-center justify-between ">
                  <span>Discount(-)</span>{" "}
                  <span className="font-semibold">-${discount.toFixed(2)}</span>
                </p>
              </div>
              <div className="border-b border-dashed border-[#717680] text-slate-700 py-3 space-y-2">
                <p className="flex items-center justify-between text-black">
                  <span>Grand Total</span>{" "}
                  <span className="font-semibold">
                    ${finalPrice.toFixed(2)}
                  </span>
                </p>
                <p className="flex items-center justify-between ">
                  <span>Customer Paid Amount</span>{" "}
                  <span className="font-semibold">$323.00</span>
                </p>
                <p className="flex items-center justify-between ">
                  <span>Change</span>{" "}
                  <span className="font-semibold">-$55.00</span>
                </p>
                <h5 className="flex items-center justify-between  text-xl text-slate-950 font-semibold">
                  <span>Total Payment</span> <span>$4,400.00</span>
                </h5>
              </div>
              <div className="border-b border-[#E9EAEB] text-slate-800 py-3 space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-x-1  ">
                    <span>Payment Type:</span>{" "}
                    <span className="text-slate-900 bg-slate-100 px-2 py-1 rounded-md">
                      Cash
                    </span>
                  </p>
                  <p className="flex items-center gap-x-1  ">
                    <span>Payment Status:</span>{" "}
                    <span className=" bg-slate-100 text-green-600 px-2 py-1 rounded-md">
                      Paid
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-x-1  ">
                    <span>Billing To:</span>{" "}
                    <span className="text-slate-900 bg-slate-100 px-2 py-1 rounded-md">
                      John Doe
                    </span>
                  </p>
                  <p className="flex items-center gap-x-1  ">
                    <span>Bill By:</span>{" "}
                    <span className="text-slate-900 bg-slate-100  px-2 py-1 rounded-md">
                      Super Admin
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-center text-green-600 capitalize">
                Thank You please come again
              </p>
              <p className="text-center text-lg text-gray-600">
                &copy;2025 Powered By{" "}
                <span className="text-[#EF5124] font-semibold">Qzency</span> All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
