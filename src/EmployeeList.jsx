import React from "react";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeAdd from "./EmployeeAdd";

function EmployeeRow({ employee }) {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.extension}</td>
      <td>{employee.email}</td>
      <td>{employee.title}</td>
    </tr>
  );
}

function EmployeeTable({ employees }) {
  const rows = employees.map((emp) => (
    <EmployeeRow key={emp.id} employee={emp} />
  ));
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      filterText: "",
    };
    this.nextId = 1;
  }

  componentDidMount() {
    // Initial dummy data
    const initialEmployees = [
      {
        id: this.nextId++,
        name: "Alice",
        extension: 123,
        email: "alice@example.com",
        title: "Engineer",
      },
    ];
    this.setState({ employees: initialEmployees });
  }

  handleAddEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: this.nextId++,
    };
    this.setState((prevState) => ({
      employees: [...prevState.employees, newEmployee],
    }));
  };

  handleFilterChange = (text) => {
    this.setState({ filterText: text });
  };

  render() {
    const { employees, filterText } = this.state;
    const filteredEmployees = employees.filter((emp) =>
      emp.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <EmployeeFilter onFilterChange={this.handleFilterChange} />
        <EmployeeTable employees={filteredEmployees} />
        <EmployeeAdd onAddEmployee={this.handleAddEmployee} />
      </div>
    );
  }
}
