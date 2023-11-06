import { useCallback, useMemo, useState } from "react";

import NavbarItem from "../NavbarItem";

import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "../MobileMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const items = useMemo(
    () => [
      "Home",
      "Series",
      "Films",
      "New & Popular",
      "My List",
      "Browse by languages",
    ],
    []
  );

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className=" w-full fixed z-40">
      <div className=" px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900/90">
        <img src="/images/logo.png" alt="logo" className="h-4 lg:h-7 " />
        <div className=" flex-row ml-8 gap-7 hidden lg:flex">
          {items.map((label) => (
            <NavbarItem label={label} key={label} />
          ))}
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className=" text-white transition " />
          <MobileMenu visible={showMobileMenu} items={items} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div className=" flex flex-row items gap-2 cursor-pointer relative">
            <div className=" w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-green.png" alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
