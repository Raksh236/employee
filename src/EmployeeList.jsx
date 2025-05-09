import React from "react";
import EmployeeFilter from "./EmployeeFilter.jsx";
import EmployeeAdd from "./EmployeeAdd.jsx";

function EmployeeRow(props) {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.extension}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.title}</td>
    </tr>
  );
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map((emp) => (
    <EmployeeRow key={emp.id} employee={emp} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      filteredEmployees: [],
      filterText: "", // ✅ FIXED: initialize filterText
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const employees = [
      {
        id: 1,
        name: "John Smith",
        extension: 123,
        email: "john@example.com",
        title: "Manager",
      },
      {
        id: 2,
        name: "Jane Doe",
        extension: 456,
        email: "jane@example.com",
        title: "Engineer",
      },
    ];
    this.setState({ employees, filteredEmployees: employees });
  }

  addEmployee = (employee) => {
    this.setState((prevState) => {
      const newEmployee = {
        id: prevState.employees.length + 1,
        ...employee,
      };
      const updatedEmployees = [...prevState.employees, newEmployee];
      const updatedFiltered = updatedEmployees.filter((emp) =>
        emp.name.toLowerCase().includes(prevState.filterText.toLowerCase())
      );
      return {
        employees: updatedEmployees,
        filteredEmployees: updatedFiltered,
      };
    });
  };

  filterEmployees = (filterText) => {
    const filteredEmployees = this.state.employees.filter((employee) =>
      employee.name.toLowerCase().includes(filterText.toLowerCase())
    );
    this.setState({ filteredEmployees });
  };

  handleFilterChange = (filterText) => {
    this.setState({ filterText }, () => {
      this.filterEmployees(filterText);
    });
  };

  render() {
    return (
      <div>
        <h1>Employee Management Application</h1>
        <EmployeeFilter onFilterChange={this.handleFilterChange} />
        <hr />
        <EmployeeTable employees={this.state.filteredEmployees} />
        <hr />
        <EmployeeAdd onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}
