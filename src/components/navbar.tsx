import { ChildrenLayoutProp } from "@/types/layout";

const Navbar: React.FC<ChildrenLayoutProp> = ({ children }) => {
  return <nav className="navbar">{children}</nav>;
};

export default Navbar;
