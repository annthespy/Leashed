import React from "react";
import Quote from "./Quote.js";
import Navbar from "./Navbar.js";
import Search from "./Search.js";
import quotes from "../quotes.js";
import apiHelpers from "../../server/apiHelpers.js";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotes[0],
      view: "quote",
      dogs: [],
    };
    this.handleQuoteChange = this.handleQuoteChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getDogs();
  }

  handleQuoteChange() {
    var randomNumber = Math.floor(Math.random() * (quotes.length - 1 + 1));
    this.setState({
      currentQuote: quotes[randomNumber],
    });
  }

  handleViewChange(view) {
    this.setState({
      view: view,
    });
  }

  handleSearch(str) {
    this.getSearchedBreed(str);
  }

  renderView() {
    const { view } = this.state;
    if (view === "quote") {
      return <Quote currentQuote={this.state.currentQuote} />;
    } else if (view === "search") {
      return <Search dogs={this.state.dogs} handleSearch={this.handleSearch} />;
    }
  }

  getDogs() {
    apiHelpers
      .getBreeds()
      .then(({ data }) => {
        this.setState({
          dogs: data,
        });
      })
      .catch((err) => {
        console.log("error getting dog breeds", err);
      });
  }

  getSearchedBreed(str) {
    apiHelpers
      .searchBreeds(str)
      .then(({ data }) => {
        this.setState({
          dogs: data,
        });
      })
      .catch((err) => {
        console.log("error getting dog breeds", err);
      });
  }

  render() {
    return (
      <div className="content" id="scroll-to-content">
        <Navbar
          view={this.state.view}
          handleQuoteChange={this.handleQuoteChange}
          handleViewChange={this.handleViewChange}
        />
        {this.renderView()}
      </div>
    );
  }
}

export default Content;
