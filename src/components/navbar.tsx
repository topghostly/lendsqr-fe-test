"use client";

import { ChildrenLayoutProp } from "@/types/layout";
import Image from "next/image";
import styles from "../styles/components/_navbar.module.scss";
import Link from "next/link";
import Button from "./Button";

const Navbar: React.FC<ChildrenLayoutProp> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link
          href={"#"}
          target="_blank"
          className="nav__brand"
          aria-label="Visit Lendsqr homepage"
        >
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={145}
            height={30}
            priority
          />
        </Link>
      </div>
      <form className={styles.navbar__form}>
        <div className={styles.navbar__form_group}>
          <input type="text" className={styles.navbar__form_input} />
          <Button
            variant="primary"
            type="button"
            onClick={() => console.log("Clicked")}
          >
            Press
          </Button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
