import Image from "next/image";
import NavLinks from "./nav-links";
import Link from "next/link";

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
          <Image
            src='/favicon.ico'
            alt="Actaion Logo"
            width={50}
            height={50}
            className="border rounded-full"
          />
        </Link>
        <NavLinks />
      </nav>
    </div>
  );
}
