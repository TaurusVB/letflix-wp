import { FC } from "react";

interface INavbarItemProps {
  label: string;
}

const NavbarItem: FC<INavbarItemProps> = ({ label }) => {
  return (
    <div className=" text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavbarItem;
