import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Auth: React.FC = () => {
  return (
    <div className="login">
      {/* LOGO NAVBAR */}
      <div className="auth__nav">
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
              width={175}
              height={36}
              priority
            />
          </Link>
        </Navbar>
      </div>
    </div>
  );
};

export default Auth;
