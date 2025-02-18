import React from "react";
import styles from "@/styles/components/dashboard/_dashboard-user-details.module.scss";
import Image from "next/image";

const UserInfo: React.FC = () => {
  return (
    <div className={styles.details}>
      <div className={styles.details__head}>
        <div className={styles.details__head_main}>
          <div className={styles.details__head_main_user}>
            <div className={styles.profile_pic}>
              <Image
                src={"/images/profileVector.svg"}
                alt="profilepic"
                width={40}
                height={40}
                priority
              />
            </div>
            <div className={styles.user_info}>
              <h2 className={styles.main_text}>Grace Effiom</h2>
              <p className={styles.sub_text}>LSQFf587g90</p>
            </div>
          </div>
          <div className={styles.seperator}></div>
          <div className={styles.details__head_main_tier}>
            <p className={styles.tier_title}>User's Tier</p>
            <div className={styles.stars_holder}>
              <Image
                src={"/images/np_star_1208084_000000.svg"}
                alt="profilepic"
                width={16}
                height={16}
                priority
              />
              <Image
                src={"/images/np_star_1171151_000000.svg"}
                alt="profilepic"
                width={16}
                height={16}
                priority
              />
              <Image
                src={"/images/np_star_1171151_000000.svg"}
                alt="profilepic"
                width={16}
                height={16}
                priority
              />
            </div>
          </div>
          <div className={styles.seperator}></div>
          <div className={styles.details__head_main_balance}>
            <h2 className={styles.main_text}>₦200,000.00</h2>
            <p className={styles.sub_text}>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className={styles.details__head_categories}>
          <div className={styles.details__head_categories_list}>
            <ul className={styles.category_items}>
              <button className={styles.category_button}>
                <li className={styles.category_item}>General Details</li>
              </button>
              <button className={styles.category_button}>
                <li className={styles.category_item}>Documents</li>
              </button>
              <button className={styles.category_button}>
                <li className={styles.category_item}>Bank Details</li>
              </button>
              <button className={styles.category_button}>
                <li className={styles.category_item}>Loans</li>
              </button>
              <button className={styles.category_button}>
                <li className={styles.category_item}>Savings</li>
              </button>
              <button className={styles.category_button}>
                <li className={styles.category_item}>App and System</li>
              </button>
            </ul>
          </div>
        </div>
      </div>
      {/* DETAILS BODY */}
      <div className={styles.details__body}>
        <div className={styles.details__body_section}>
          <p className={styles.title}>Personal Information</p>
          <div className={styles.grid_5}>
            <div className={styles.detail}>
              <p className={styles.detail_title}>full Name</p>
              <p className={styles.detail_point}>Grace Effiom</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Phone Number</p>
              <p className={styles.detail_point}>07060780922</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Email Address</p>
              <p className={styles.detail_point}>grace@gmail.com</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Bvn</p>
              <p className={styles.detail_point}>07060780922</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Gender</p>
              <p className={styles.detail_point}>Female</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Marital status</p>
              <p className={styles.detail_point}>Single</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Children</p>
              <p className={styles.detail_point}>None</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Type of residence</p>
              <p className={styles.detail_point}>Parent’s Apartment</p>
            </div>
          </div>
        </div>
        <div className={styles.seperator}></div>
      </div>
    </div>
  );
};

export default UserInfo;
