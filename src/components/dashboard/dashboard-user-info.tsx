import React, { useEffect, useState } from "react";
import styles from "@/styles/components/dashboard/_dashboard-user-details.module.scss";
import Image from "next/image";
import { useUsers } from "@/hooks/users";
import { userDetailsPageProp } from "@/types/layout";
import { UserDetailsProp } from "@/types/user";

const UserInfo: React.FC<userDetailsPageProp> = ({ currentUserID }) => {
  const { users } = useUsers();
  const [userDetails, setUserDetails] = useState<UserDetailsProp>();
  useEffect(() => {
    if (users && currentUserID) {
      const foundUser = users.find(
        (user: UserDetailsProp) => user.id === Number(currentUserID)
      );
      setUserDetails(foundUser);
    }
    console.log(userDetails);
  });
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
              <h2 className={styles.main_text}>{userDetails?.full_name}</h2>
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
              <button className={`${styles.category_button} ${styles.active}`}>
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
              <p className={styles.detail_point}>{userDetails?.full_name}</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Phone Number</p>
              <p className={styles.detail_point}>{userDetails?.phone_number}</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Email Address</p>
              <p className={styles.detail_point}>{userDetails?.email}</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Bvn</p>
              <p className={styles.detail_point}>{userDetails?.bvn}</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Gender</p>
              <p className={styles.detail_point}>{userDetails?.gender}</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Marital status</p>
              <p className={styles.detail_point}>
                {userDetails?.marital_status}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Children</p>
              <p className={styles.detail_point}>
                {userDetails?.children ? userDetails?.children : ""}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Type of residence</p>
              <p className={styles.detail_point}>
                {userDetails?.type_of_residence}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.details__body_section}>
          <p className={styles.title}>Education and Employment</p>
          <div className={styles.grid_4}>
            <div className={styles.detail}>
              <p className={styles.detail_title}>level of education</p>
              <p className={styles.detail_point}>
                {userDetails?.education_level}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>employment status</p>
              <p className={styles.detail_point}>
                {userDetails?.employment_status}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>sector of employment</p>
              <p className={styles.detail_point}>
                {userDetails?.sector_of_employment}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Duration of employment</p>
              <p className={styles.detail_point}>
                {userDetails?.duration_of_employment}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>office email</p>
              <p className={styles.detail_point}>{userDetails?.office_email}</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Monthly income</p>
              <p className={styles.detail_point}>
                {userDetails?.monthly_income}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>loan repayment</p>
              <p className={styles.detail_point}>
                {userDetails?.loan_repayment}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.details__body_section}>
          <p className={styles.title}>Socials</p>
          <div className={styles.grid_5}>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Twitter</p>
              <p className={styles.detail_point}>
                {userDetails?.socials.twitter}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Facebook</p>
              <p className={styles.detail_point}>
                {userDetails?.socials.facebook}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Instagram</p>
              <p className={styles.detail_point}>
                {userDetails?.socials.instagram}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.details__body_section}>
          <p className={styles.title}>Guarantor</p>
          <div className={styles.grid_5}>
            <div className={styles.detail}>
              <p className={styles.detail_title}>full Name</p>
              <p className={styles.detail_point}>
                {userDetails?.guarantor.full_name}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Phone Number</p>
              <p className={styles.detail_point}>
                {userDetails?.guarantor.phone_number}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Email Address</p>
              <p className={styles.detail_point}>
                {userDetails?.guarantor.email_address}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Relationship</p>
              <p className={styles.detail_point}>
                {userDetails?.guarantor.relationship}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.details__body_section}>
          {/* <p className={styles.title}>Guarantor</p> */}
          <div className={styles.grid_5}>
            <div className={styles.detail}>
              <p className={styles.detail_title}>full Name</p>
              <p className={styles.detail_point}>
                {userDetails?.guarantor.full_name}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Phone Number</p>
              <p className={styles.detail_point}>
                {userDetails?.guarantor.phone_number}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Email Address</p>
              <p className={styles.detail_point}>
                {userDetails?.guarantor.email_address}
              </p>
            </div>
            <div className={styles.detail}>
              <p className={styles.detail_title}>Relationship</p>
              <p className={styles.detail_point}>
                {userDetails?.guarantor.relationship}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
