"use client";

import React from "react";
import "../../styles/components/dashboard/_filter.scss";
import { useUsers } from "@/hooks/users";
import { userFilterProps } from "@/types/user";

const FilterForm = () => {
  const { setFilters, filters } = useUsers();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters((prev: userFilterProps) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFilters({
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
          value={filters.organization}
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
          value={filters.username}
          onChange={handleChange}
          placeholder="User"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={filters.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>

      <label>
        Date
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone Number
        <input
          type="text"
          name="phoneNumber"
          value={filters.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </label>

      <label>
        Status
        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>

      <div className="buttons">
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        <button className="filter">Filter</button>
      </div>
    </div>
  );
};

export default FilterForm;
