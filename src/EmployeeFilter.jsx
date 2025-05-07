import React from "react";

export default class EmployeeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
  }

  handleFilterChange = (event) => {
    const filterText = event.target.value;
    this.setState({ filterText }, () => {
      this.props.onFilterChange(filterText);
    });
  };

  render() {
    return (
      <div>
        <h3>Filter Employees</h3>
        <input
          type="text"
          placeholder="Search by name"
          value={this.state.filterText}
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}
