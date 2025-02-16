import { ChildrenLayoutProp } from "@/types/layout";
import Image from "next/image";

const Navbar: React.FC<ChildrenLayoutProp> = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          width={145}
          height={30}
          priority
        />
      </div>
      <form className="navbar__form">
        <div className="navbar__form-group">
          <input type="text" className="navbar__form-input" />b
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
