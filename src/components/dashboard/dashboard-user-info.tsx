import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useUsers } from "@/hooks/users";
import { userDetailsPageProp } from "@/types/layout";
import { UserDetailsProp } from "@/types/user";
import { formatBalance, formatDateTime } from "@/lib/util";

const UserInfo: React.FC<userDetailsPageProp> = ({ currentUserID }) => {
  const { users } = useUsers();
  const [userDetails, setUserDetails] = useState<UserDetailsProp>();
  const maximumTier = 3;
  useEffect(() => {
    if (users && currentUserID) {
      const foundUser = users.find(
        (user: UserDetailsProp) => user.id === currentUserID
      );
      setUserDetails(foundUser);
    }
    console.log(userDetails);
  });
  return (
    <div className="details">
      <div className="details__head">
        <div className="details__head-main">
          <div className="details__head-main_user">
            <div className="profile_pic">
              <Image
                src={"/images/profileVector.svg"}
                alt="profilepic"
                width={40}
                height={40}
                priority
              />
            </div>
            <div className="user_info">
              <h2 className="main_text">{userDetails?.full_name}</h2>
              <p className="sub_text">{userDetails?.id}</p>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="details__head-main_tier">
            <p className="tier_title">User's Tier</p>
            <div className="stars_holder">
              {Array.from(
                { length: Number(userDetails?.user_tier) || 0 },
                (_, index) => (
                  <Image
                    key={index}
                    src={"/images/np_star_1208084_000000.svg"}
                    alt="profilepic"
                    width={16}
                    height={16}
                    priority
                  />
                )
              )}
              {Array.from(
                { length: maximumTier - Number(userDetails?.user_tier) || 0 },
                (_, index) => (
                  <Image
                    key={index}
                    src={"/images/np_star_1171151_000000.svg"}
                    alt="profilepic"
                    width={16}
                    height={16}
                    priority
                  />
                )
              )}
            </div>
          </div>
          <div className="seperator"></div>
          <div className="details__head-main_balance">
            <h2 className="main_text">
              ₦{formatBalance(Number(userDetails?.bank.user_balance) || 0)}
            </h2>
            <p className="sub_text">
              {userDetails?.bank.acct_number}/{userDetails?.bank.name}
            </p>
          </div>
        </div>
        <div className="details__head-categories">
          <div className="details__head-categories_list">
            <ul className="category_items">
              <button className={`category_button active`}>
                <li className="category_item">General Details</li>
              </button>
              <button className="category_button">
                <li className="category_item">Documents</li>
              </button>
              <button className="category_button">
                <li className="category_item">Bank Details</li>
              </button>
              <button className="category_button">
                <li className="category_item">Loans</li>
              </button>
              <button className="category_button">
                <li className="category_item">Savings</li>
              </button>
              <button className="category_button">
                <li className="category_item">App and System</li>
              </button>
            </ul>
          </div>
        </div>
      </div>
      {/* DETAILS BODY */}
      <div className="details__body">
        <div className="details__body-section">
          <p className="title">Personal Information</p>
          <div className="grid_5">
            <div className="detail">
              <p className="detail_title">full Name</p>
              <p className="detail_point">{userDetails?.full_name}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Phone Number</p>
              <p className="detail_point">{userDetails?.phone_number}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Email Address</p>
              <p className="detail_point">{userDetails?.email}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Bvn</p>
              <p className="detail_point">{userDetails?.bvn}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Gender</p>
              <p className="detail_point">{userDetails?.gender}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Marital status</p>
              <p className="detail_point">{userDetails?.marital_status}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Children</p>
              <p className="detail_point">{userDetails?.children}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Type of residence</p>
              <p className="detail_point">{userDetails?.type_of_residence}</p>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="details__body-section">
          <p className="title">Education and Employment</p>
          <div className="grid_4">
            <div className="detail">
              <p className="detail_title">level of education</p>
              <p className="detail_point">{userDetails?.education_level}</p>
            </div>
            <div className="detail">
              <p className="detail_title">employment status</p>
              <p className="detail_point">{userDetails?.employment_status}</p>
            </div>
            <div className="detail">
              <p className="detail_title">sector of employment</p>
              <p className="detail_point">
                {userDetails?.sector_of_employment}
              </p>
            </div>
            <div className="detail">
              <p className="detail_title">Duration of employment</p>
              <p className="detail_point">
                {userDetails?.duration_of_employment}
              </p>
            </div>
            <div className="detail">
              <p className="detail_title">office email</p>
              <p className="detail_point">{userDetails?.office_email}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Monthly income</p>
              <p className="detail_point">{userDetails?.monthly_income}</p>
            </div>
            <div className="detail">
              <p className="detail_title">loan repayment</p>
              <p className="detail_point">
                ₦{formatBalance(Number(userDetails?.loan_repayment) || 0)}
              </p>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="details__body-section">
          <p className="title">Socials</p>
          <div className="grid_5">
            <div className="detail">
              <p className="detail_title">Twitter</p>
              <p className="detail_point">{userDetails?.socials.twitter}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Facebook</p>
              <p className="detail_point">{userDetails?.socials.facebook}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Instagram</p>
              <p className="detail_point">{userDetails?.socials.instagram}</p>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="details__body-section">
          <p className="title">Guarantor</p>
          <div className="grid_5">
            <div className="detail">
              <p className="detail_title">full Name</p>
              <p className="detail_point">{userDetails?.guarantor.full_name}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Phone Number</p>
              <p className="detail_point">
                {userDetails?.guarantor.phone_number}
              </p>
            </div>
            <div className="detail">
              <p className="detail_title">Email Address</p>
              <p className="detail_point">
                {userDetails?.guarantor.email_address}
              </p>
            </div>
            <div className="detail">
              <p className="detail_title">Relationship</p>
              <p className="detail_point">
                {userDetails?.guarantor.relationship}
              </p>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="details__body-section">
          {/* <p className="title">Guarantor</p> */}
          <div className="grid_5">
            <div className="detail">
              <p className="detail_title">full Name</p>
              <p className="detail_point">{userDetails?.guarantor.full_name}</p>
            </div>
            <div className="detail">
              <p className="detail_title">Phone Number</p>
              <p className="detail_point">
                {userDetails?.guarantor.phone_number}
              </p>
            </div>
            <div className="detail">
              <p className="detail_title">Email Address</p>
              <p className="detail_point">
                {userDetails?.guarantor.email_address}
              </p>
            </div>
            <div className="detail">
              <p className="detail_title">Relationship</p>
              <p className="detail_point">
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
