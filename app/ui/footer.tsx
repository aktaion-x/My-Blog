import { BsTwitterX, BsGithub } from "react-icons/bs";
import { SiGmail, SiLinkedin } from "react-icons/si";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative bg-neutral-900 bg-opacity-30 mt-20">
      <div className="max-w-screen-2xl mx-auto px-10 py-3 flex flex-col">
        <div className="flex md:justify-between justify-center items-center md:flex-row flex-col mb-3">
          <h3 className="text-2xl font-semibold"><Link href='/'>Aktaion Blog</Link></h3>
          <ul className="flex gap-5 mt-3 mb-4 text-neutral-400 transition-all duration-700">
            <li><Link className="hover:text-neutral-200 transition-colors" href='/admin'>Admin</Link></li>
            <li><Link className="hover:text-neutral-200 transition-colors" href='/about'>About</Link></li>
            <li><Link className="hover:text-neutral-200 transition-colors" href='/blogs'>Blogs</Link></li>
            <li><Link className="hover:text-neutral-200 transition-colors" target="_blank" href='http://ghassan-athamin.site/'>Portfolio</Link></li>
          </ul>
        </div>
        <div className="flex gap-3 items-center justify-center flex-col">
          <h5>Stay in touch</h5>
          <ul className="text-2xl flex gap-5">
            <li>
              <Link target="_blank" className="main-box p-2 rounded-lg hover:bg-opacity-100 block" href='https://twitter.com/aktaion_x'><BsTwitterX /></Link>
            </li>
            <li>
              <Link target="_blank" className="main-box p-2 rounded-lg hover:bg-opacity-100 block" href='https://www.linkedin.com/in/ghassan-athamin/'><SiLinkedin /></Link>
            </li>
            <li>
              <Link target="_blank" className="main-box p-2 rounded-lg hover:bg-opacity-100 block" href='https://github.com/aktaion-x'><BsGithub /></Link>
            </li>
            <li>
              <Link target="_blank" className="main-box p-2 rounded-lg hover:bg-opacity-100 block" href='mailto:ghassan.athamin@gmail.com'><SiGmail /></Link>
            </li>
          </ul>
        </div>
        <p className="text-xs text-neutral-400 md:text-base text-center pt-6 my-6 flex justify-center items-center border-t border-neutral-900">Copyright © 2023 Actaion Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}
