import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "@/styles/modules/auth.module.scss";

const Auth: React.FC = () => {
  return (
    <div className={`${styles.authLayout} container `}>
      {/* LOGO NAVBAR */}
      <div className={styles.authLayout__nav}>
        <Navbar>
          <Link
            href={"https://lendsqr.com/"}
            target="_blank"
            className="navbar__brand"
            aria-label="Visit Lendsqr homepage"
          >
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={174}
              height={36}
              priority
            />
          </Link>
        </Navbar>
      </div>
      <div className={styles.auth}>
        <div className={styles.auth__illustration}>
          <Image
            src={"/images/pablo-sign-in.svg"}
            alt="pablo sign in illustration"
            width={600}
            height={338}
          />
        </div>
        <div className={styles.auth__form}>
          <div className={styles.form}>
            <h1 className={styles.auth__form_header}>Welcome</h1>
            <p>Enter details to login.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
