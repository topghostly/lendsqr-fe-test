"use client";

import React, { useState } from "react";
import "../../styles/components/dashboard/_filter.scss";

const FilterForm = () => {
  const [formData, setFormData] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
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
          value={formData.organization}
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
          value={formData.username}
          onChange={handleChange}
          placeholder="User"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>

      <label>
        Date
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone Number
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </label>

      <label>
        Status
        <select name="status" value={formData.status} onChange={handleChange}>
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
