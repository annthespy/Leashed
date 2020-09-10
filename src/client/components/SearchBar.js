import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Breed name"
          />
        </label>{" "}
        <input
          className="myButton"
          type="submit"
          value="Search"
          onClick={this.props.handleSearch(this.state.value)}
        />
      </form>
    );
  }
}

export default SearchBar;
