import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/dashboard/_sidenav.module.scss";

const SideNav: React.FC = () => {
  return (
    <aside>
      <div className={styles.sidenav}>
        <div className={styles.sidenav__action}>
          <div className={`${styles.sidenav__action_organisation}`}>
            <span>
              <Image
                src={"/images/briefcase.svg"}
                alt="briefcae icon"
                width={16}
                height={16}
                priority
              />
            </span>
            Switch Organisation
            <span>
              <Image
                src={"/images/dropdown-outline.svg"}
                alt="briefcae icon"
                width={14}
                height={14}
                priority
              />
            </span>
          </div>
          <div className={styles.sidenav__action_tab}>
            <span>
              <Image
                src={"/images/home.svg"}
                alt="briefcae icon"
                width={16}
                height={16}
                priority
              />
            </span>
            Dashboard
          </div>
        </div>
        {/* LIST SECTION */}
        <ul className={styles.sidenav__nav}>
          <li className={styles.sidenav__nav_title}>CUSTOMERS</li>
          {/* CUSTOMER SECTION */}
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/user-friends.svg"}
                    alt="user friends icon"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
                Users
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/guarantors.svg"}
                    alt="user friends icon"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
                Guarantors
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/loan.svg"}
                    alt="user friends icon"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
                Loans
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/handshake.svg"}
                    alt="handshake icon"
                    width={19}
                    height={15}
                    priority
                  />
                </span>
                Decision Models
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/piggy-bank.svg"}
                    alt="Piggy bank icon"
                    width={16}
                    height={14}
                    priority
                  />
                </span>
                Savings
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/request.svg"}
                    alt="Loan request icon"
                    width={18}
                    height={22}
                    priority
                  />
                </span>
                Loan Request
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/user-check.svg"}
                    alt="Loan request icon"
                    width={18}
                    height={22}
                    priority
                  />
                </span>
                Whitelist
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/user-times.svg"}
                    alt="Loan request icon"
                    width={18}
                    height={22}
                    priority
                  />
                </span>
                Karma
              </li>
            </Link>
          </div>
          <li className={styles.sidenav__nav_title}>BUSINESSES</li>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/organisation.svg"}
                    alt="organisation icon"
                    width={18}
                    height={22}
                    priority
                  />
                </span>
                Organization
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/loan-products.svg"}
                    alt="organisation icon"
                    width={18}
                    height={22}
                    priority
                  />
                </span>
                Loan Products
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/savings-products.svg"}
                    alt="organisation icon"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
                Savings Products
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/coins-solid.svg"}
                    alt="organisation icon"
                    width={18}
                    height={22}
                    priority
                  />
                </span>
                Fees and Charges
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/transaction.svg"}
                    alt="organisation icon"
                    width={16}
                    height={18}
                    priority
                  />
                </span>
                Transactions
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/galaxy.svg"}
                    alt="organisation icon"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
                Services
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/service-account.svg"}
                    alt="organisation icon"
                    width={16}
                    height={13}
                    priority
                  />
                </span>
                Service Account
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/scroll.svg"}
                    alt="organisation icon"
                    width={16}
                    height={13}
                    priority
                  />
                </span>
                Settlements
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/chart-bar.svg"}
                    alt="organisation icon"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
                Reports
              </li>
            </Link>
          </div>
          <li className={styles.sidenav__nav_title}>SETTINGS</li>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/sliders-h.png"}
                    alt="organisation icon"
                    width={14}
                    height={14}
                    priority
                  />
                </span>
                Preferences
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/badge-percent.svg"}
                    alt="organisation icon"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
                Fees and Pricing
              </li>
            </Link>
          </div>
          <div className={styles.sidenav__nav_tooltip}>
            <Link href="#">
              <li>
                <span>
                  <Image
                    src={"/images/audit.svg"}
                    alt="organisation icon"
                    width={11}
                    height={18}
                    priority
                  />
                </span>
                Audit Logs
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
