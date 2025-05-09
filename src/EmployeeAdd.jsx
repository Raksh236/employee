import React from "react";

export default class EmployeeAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      extension: "",
      email: "",
      title: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, extension, email, title } = this.state;

    if (!name || !extension || !email || !title) {
      alert("All fields are required!");
      return;
    }

    const newEmployee = {
      name,
      extension: Number(extension), // ✅ parse to number
      email,
      title,
    };

    this.props.onAddEmployee(newEmployee);
    this.setState({ name: "", extension: "", email: "", title: "" }); // reset form
  };

  render() {
    return (
      <div>
        <h2>Add New Employee</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="extension"
            value={this.state.extension}
            onChange={this.handleChange}
            placeholder="Extension"
            required
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
            required
          />
          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}
