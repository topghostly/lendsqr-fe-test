import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <aside>
        <div>
          <div></div>
          {/* TOP SECTION */}
          <div>
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
          <div>
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
          {/* LIST SECTION */}
          <ul>
            <li>CUSTOMER</li>
            {/* CUSTOMER SECTION */}
            <div>
              <li>
                <Link href="#">
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
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
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
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
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
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
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
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
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
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
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
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="Loan request icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Whitelist
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="Loan request icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Karma
                </Link>
              </li>
            </div>
            <li>BUSINESSES</li>
            <div>
              <li>
                <Link href="#">
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
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Loan Products
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Savings Products
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Fees and Charges
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Transactions
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Services
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Service Account
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Settlements
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Reports
                </Link>
              </li>
            </div>
            <li>SETTINGS</li>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Preferences
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Fees and Pricing
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="#">
                  <span>
                    <Image
                      src={"/images/request.svg"}
                      alt="organisation icon"
                      width={18}
                      height={22}
                      priority
                    />
                  </span>
                  Audit Logs
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Dashboard;
