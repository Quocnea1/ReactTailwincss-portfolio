import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
        <Link spy={true} smooth={true} duration={500} offset={-120} to="main">
          <img 
            src="/images/logo04.png" 
            alt="logo" 
            className="h-16 w-auto object-contain cursor-pointer" 
          />
        </Link>
    </div>
  );
};

export default NavbarLogo;
