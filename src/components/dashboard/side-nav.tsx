"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../ui/dropdown";

const menuItems = [
  {
    title: "CUSTOMERS",
    links: [
      { icon: "/images/user-friends.svg", label: "Users", href: "#" },
      { icon: "/images/guarantors.svg", label: "Guarantors", href: "#" },
      { icon: "/images/loan.svg", label: "Loans", href: "#" },
      { icon: "/images/handshake.svg", label: "Decision Models", href: "#" },
      { icon: "/images/piggy-bank.svg", label: "Savings", href: "#" },
      { icon: "/images/request.svg", label: "Loan Request", href: "#" },
    ],
  },
  {
    title: "BUSINESSES",
    links: [
      { icon: "/images/organisation.svg", label: "Organization", href: "#" },
      { icon: "/images/loan-products.svg", label: "Loan Products", href: "#" },
      {
        icon: "/images/savings-products.svg",
        label: "Savings Products",
        href: "#",
      },
      { icon: "/images/coins-solid.svg", label: "Fees and Charges", href: "#" },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      { icon: "/images/sliders-h.png", label: "Preferences", href: "#" },
      {
        icon: "/images/badge-percent.svg",
        label: "Fees and Pricing",
        href: "#",
      },
      { icon: "/images/audit.svg", label: "Audit Logs", href: "#" },
    ],
  },
];

const MenuList = () => {
  return (
    <ul className="sidenav__nav">
      {menuItems.map((section) => (
        <div key={section.title} className="holder">
          <li className="sidenav__nav-title">{section.title}</li>
          {section.links.map((item) => (
            <div
              key={item.label}
              className={`sidenav__nav-tooltip ${
                "Users" === item.label && "active"
              }`}
            >
              <Link href={item.href}>
                <li>
                  <span>
                    <Image
                      src={item.icon}
                      alt={`${item.label} icon`}
                      width={16}
                      height={16}
                      priority
                    />
                  </span>
                  {item.label}
                </li>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </ul>
  );
};

const SideNav: React.FC = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav__action">
        <div className="sidenav__action-organisation">
          <Image
            src={"/images/briefcase.svg"}
            alt="briefcase icon"
            width={16}
            height={16}
            priority
          />
          Switch Organisation
          <Dropdown
            trigger={
              <Image
                src={"/images/dropdown-outline.svg"}
                alt="dropdown icon"
                width={14}
                height={14}
                priority
              />
            }
          >
            <ul>
              <li>LendSqr</li>
            </ul>
          </Dropdown>
        </div>
        <div className="sidenav__action-tab">
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
      <MenuList />
    </aside>
  );
};

export default SideNav;
