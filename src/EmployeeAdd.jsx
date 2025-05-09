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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, extension, email, title } = this.state;
    if (!name || !extension || !email || !title) {
      alert("Please fill all fields");
      return;
    }

    this.props.onAddEmployee({
      name,
      extension: Number(extension),
      email,
      title,
    });

    this.setState({
      name: "",
      extension: "",
      email: "",
      title: "",
    });
  };

  render() {
    const { name, extension, email, title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Employee</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="extension"
          value={extension}
          onChange={this.handleChange}
          placeholder="Extension"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
