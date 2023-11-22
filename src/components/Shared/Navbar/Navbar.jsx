import { Link } from "react-router-dom";
import Container from "../Container";
import logoImg from "../../../assets/images/logo.png";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <h1 className="font-bold text-2xl bg-gradient-to-r from-[#3E71C9] to-[#B05780] bg-clip-text text-transparent">
                Online Doctor
              </h1>
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
