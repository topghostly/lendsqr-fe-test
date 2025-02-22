"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import Dropdown from "./dropdown";
import SideNav from "../dashboard/side-nav";
import { useState } from "react";

import styles from "@/styles/modules/navbar.module.scss";

const Navbar: React.FC = () => {
  const [activeSidebar, setActiveSideBar] = useState<boolean>(false);
  return (
    <nav className={styles.navbar}>
      {/* HIDE AND VIEW SIDEBAR BUTTON */}
      <div
        className={styles.navbar__control}
        onClick={() => {
          setActiveSideBar((prev) => !prev);
        }}
      >
        <Image
          src={"/images/table_options.svg"}
          alt="logo"
          width={20}
          height={20}
          priority
        />
      </div>

      {/* SIDEBAR CONTAINER */}
      <div
        className={styles.sidenav__holder}
        style={{
          left: `${activeSidebar ? "0" : "calc(290rem * -1)"}`,
        }}
      >
        <SideNav />
      </div>
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

      {/* SIDEBAR FORM */}
      <form className={styles.navbar__form}>
        <div className={styles.navbar__form_group}>
          <input
            type="text"
            className={styles.navbar__form_input}
            placeholder="Search for anything"
          />
          <Button
            variant="fill"
            color="primary"
            type="button"
            onClick={() => console.log("Clicked")}
            customClass={{ borderRadius: "0 0.5rem 0.5rem 0", width: "3.5rem" }}
          >
            <Image
              src={"/images/search.svg"}
              alt="search icon"
              width={14}
              height={14}
              priority
            />
          </Button>
        </div>
      </form>

      {/* USER INFO & NOTIFICATION */}
      <div className={styles.navbar__info_holder}>
        <Link href={"#"} className={styles.doc_link}>
          Docs
        </Link>
        <div className={styles.notification_holder}>
          <Button
            type="button"
            color="primary"
            variant="text"
            onClick={() => {}}
          >
            <Image
              src={"/images/notification.png"}
              alt="search icon"
              width={26}
              height={26}
              priority
            />
          </Button>
        </div>

        {/* USER PROFILE SECTION */}
        <div className={styles.user__details}>
          <Image
            src={"/images/profile.png"}
            className={styles.user__details_image}
            alt="Adedeji profile picture"
            width={48}
            height={48}
            priority
          />
          <div className={styles.user__details_name}>
            <p>Adedeji</p>

            {/* DROPDOWN FOR USER ACTION */}
            <Dropdown
              trigger={
                <Image
                  src={"/images/dropdown.svg"}
                  className={styles.user__details_image}
                  alt="drop down image"
                  width={20}
                  height={20}
                  priority
                />
              }
            >
              <ul>
                <li>Account</li>
                <li>Upgrade</li>
                <li>Logout</li>
              </ul>
            </Dropdown>
          </div>
        </div>

        {/* HAMBURGER MENU */}
        <div className={styles.side}>
          <Dropdown
            trigger={
              <Image
                src={"/images/burger-menu-svgrepo-com.svg"}
                alt="search icon"
                width={24}
                height={24}
                priority
              />
            }
          >
            <ul>
              <li>Adedeji</li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
