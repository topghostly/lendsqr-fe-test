"use client";

import Image from "next/image";
import styles from "../../styles/modules/navbar.module.scss";
import Link from "next/link";
import Button from "./button";
import Dropdown from "./dropdown";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [openSide, setOpenSide] = useState(false);
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
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
