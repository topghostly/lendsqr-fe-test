"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/modules/auth.module.scss";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Auth: React.FC = () => {
  const router = useRouter();
  return (
    <div className={`${styles.authLayout} container `}>
      {/* LOGO NAVBAR */}
      <div className={styles.authLayout__nav}>
        <nav className={styles.navbar}>
          <Link
            href={"https://lendsqr.com/"}
            target="_blank"
            className="nav__brand"
            aria-label="Visit Lendsqr homepage"
          >
            <Image
              src={"/images/logo.svg"}
              alt="lendsqr logo"
              width={174}
              height={36}
              priority
            />
          </Link>
        </nav>
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
            <h1 className={styles.auth__form_header}>Welcome!</h1>
            <p className={styles.auth__form_subheader}>
              Enter details to login.
            </p>
            <form
              autoComplete="off"
              noValidate={true}
              className={styles.auth__form_inner}
            >
              <div className={styles.input_holder_holder}>
                <div className={styles.input_holder}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    className={styles.form_input}
                  />
                  <label htmlFor="email" className={styles.form_label}>
                    Email
                  </label>
                </div>
                <div className={styles.input_holder}>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="off"
                    className={styles.form_input}
                  />
                  <label htmlFor="password" className={styles.form_label}>
                    Password
                  </label>
                </div>
              </div>

              <div className={styles.forgot_link}>
                <Link href={"#"}>Forgot password?</Link>
              </div>
              <div className={styles.submit_btn}>
                <Button
                  fullWidth={true}
                  variant="fill"
                  onClick={() => {
                    router.push("/dashboard/users/");
                  }}
                  type="button"
                  color="primary"
                >
                  LOG IN
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
