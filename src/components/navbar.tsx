import { ChildrenLayoutProp } from "@/types/layout";

const Navbar: React.FC<ChildrenLayoutProp> = ({ children }) => {
  return <nav className="">{children}</nav>;
};

export default Navbar;
