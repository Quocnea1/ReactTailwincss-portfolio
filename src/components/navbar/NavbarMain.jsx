import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-opacity-40 items-center p-3 rounded-r-full rounded-l-full  ">
        
        <div className="flex justify-center pl-10 w-full lg:w-auto">
            <NavbarLogo />
        </div>
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block items-center justify-center rounded-full pt-5 ">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
