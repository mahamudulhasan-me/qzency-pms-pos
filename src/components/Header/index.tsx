import Image from "next/image";
import Link from "next/link";
import ExitPOS from "./ExitPOS";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container  mx-auto w-full px-4 flex items-center">
        <div className="relative w-44 pb-5 pt-2">
          <Link href={"/"}>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={100}
              height={100}
            />
            <span className="text-xs absolute left-1 tracking-widest text-slate-500 font-semibold">
              POINT OF SALE
            </span>
          </Link>
        </div>
        <ExitPOS />
      </div>
    </header>
  );
};

export default Header;
