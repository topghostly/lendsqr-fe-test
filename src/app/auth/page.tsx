"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import styles from "@/styles/modules/auth.module.scss";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Auth: React.FC = () => {
  interface SignInData {
    email: string;
    password: string;
  }
  const router = useRouter();
  const [signinData, setSigninData] = useState<SignInData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninData((prev: SignInData) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(signinData.email)) {
      alert("Invalid email format.");
      return;
    }

    if (signinData.password.length < 4) {
      alert("Password must be at least 4 characters.");
      return;
    }
    router.push("/dashboard/users/");
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className={`${styles.authLayout} container `}>
      {/* LOGO NAVBAR */}
      <header className={styles.header}>
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
      </header>
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
              className={styles.auth__form_container}
              onSubmit={handleSubmit}
            >
              <div className={styles.input_group}>
                <div className={styles.input_holder}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    className={styles.form_input}
                    value={signinData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className={styles.input_holder}>
                  <button
                    className={styles.toggleButton}
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={togglePassword}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    autoComplete="off"
                    className={styles.form_input}
                    value={signinData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {/* <label htmlFor="password" className={styles.form_label}>
                    Password
                  </label> */}
                </div>
              </div>

              <div className={styles.forgot_password}>
                <Link href={"#"}>Forgot password?</Link>
              </div>
              <div className={styles.submit_button}>
                <Button
                  fullWidth={true}
                  variant="fill"
                  onClick={() => {}}
                  type="submit"
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
