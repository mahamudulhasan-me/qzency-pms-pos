import { Download, MapPinHouse, PhoneCall, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OrderModal = () => {
  const isOpen = true;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        // onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-[586px] h-fit bg-white overflow-auto rounded-lg">
        <div className="sticky top-0 bg-white  p-4 flex items-center justify-between">
          <div className="relative w-44 pb-5 pt-2 z-[99999]">
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
              // onClick={onClose}
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
              <span className="text-slate-700">+8801710648088</span>
            </div>
            <div className="flex items-center gap-x-2">
              <MapPinHouse
                size={16}
                strokeWidth={1}
                absoluteStrokeWidth
                className="size-7 bg-slate-200 p-2 text-gray-600 rounded-md"
              />
              <span className="text-slate-700">
                House-09, Road-01, Sector-15, Uttara, Dhaka
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
