import Image from "next/image";
import NavLinks from "./nav-links";
import Link from "next/link";
import Logo from "../logo";

export default function Navbar() {
  return (
    <div className="relative">
      <nav className="
        flex justify-between items-center
        w-11/12 left-1/2 -translate-x-1/2 max-w-screen-xl  
        fixed z-50 p-1 top-5
        main-box rounded-full
      ">
        <Link href='/' className="logo flex gap-2 items-center">
          <Logo className={"w-[50px] h-[50px] border rounded-full p-1.5 text-white"} />
        </Link>
        <NavLinks />
      </nav>
    </div>
  );
}
