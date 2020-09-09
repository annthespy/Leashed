import React from "react";
import Quote from "./Quote.js";
import Navbar from "./Navbar.js";
import Search from "./Search.js";
import quotes from "../quotes.js";
import axios from "axios";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotes[0],
      view: "quote",
    };
    this.handleQuoteChange = this.handleQuoteChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
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

  renderView() {
    const { view } = this.state;
    if (view === "quote") {
      return <Quote currentQuote={this.state.currentQuote} />;
    } else if (view === "search") {
      return <Search />;
    }
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
