"use client";

import React, { useEffect, useState } from "react";
import { useUsers } from "@/hooks/users";
import { userFilterProps } from "@/types/user";
import Image from "next/image";
import Button from "../ui/button";

const FilterForm = ({ setShowFilter }) => {
  const { setFilters } = useUsers();

  const [form, setForm] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev: userFilterProps) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(form);
  };
  const handleSubmit = () => {
    setFilters({ ...form });
    setShowFilter(false);
  };

  const handleReset = () => {
    setForm({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
  };

  return (
    <div className="filter-form">
      <label>
        Organization
        <select
          name="organization"
          value={form.organization}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="lendsqr">Lendsqr</option>
          <option value="irorun">Irorun</option>
        </select>
      </label>

      <label>
        Username
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="User"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>

      <label>
        Date
        <div className="date-holder">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
          <Image
            src={"/images/np_calendar_2080577_000000.svg"}
            alt="logo"
            width={16}
            height={16}
            priority
          />
        </div>
      </label>

      <label>
        Phone Number
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </label>

      <label>
        Status
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>

      <div className="buttons">
        <Button
          type="button"
          fullWidth={true}
          variant="outline"
          onClick={handleReset}
          customClass={{
            border: "solid 1px rgba(84, 95, 125, 1)",
            color: "rgba(84, 95, 125, 1)",
          }}
        >
          Reset
        </Button>
        <Button
          type="button"
          variant="fill"
          color="primary"
          onClick={handleSubmit}
          fullWidth={true}
        >
          Filter
        </Button>
      </div>
    </div>
  );
};

export default FilterForm;
