import { FC } from "react";

interface IMobileMenuProps {
  visible?: boolean;
  items: string[];
}

const MobileMenu: FC<IMobileMenuProps> = ({ visible, items }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className=" bg-black w-56 absolute top-8 left-0 py-6 flex-col border-2 border-gray-800 flex">
      <div className=" flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item}
            className=" px-3 text-center text-white hover:underline"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
