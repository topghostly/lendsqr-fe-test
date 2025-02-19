"use client";

import React, { useEffect, useState } from "react";
import "../../styles/components/dashboard/_filter.scss";
import { useUsers } from "@/hooks/users";
import { userFilterProps } from "@/types/user";

const FilterForm = () => {
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
  };
  const handleSubmit = () => {
    setFilters({ ...form });
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
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
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
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        <button className="filter" onClick={handleSubmit}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
