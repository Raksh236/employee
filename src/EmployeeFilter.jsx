import React from "react";

export default function EmployeeFilter({ onFilterChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}
