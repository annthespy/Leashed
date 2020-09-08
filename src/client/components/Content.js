import React from "react";
import Quote from "./Quote.js";
import quotes from "../quotes.js";
import axios from "axios";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotes[0],
    };
  }

  render() {
    return (
      <div className="content" id="scroll-to-content">
        <Quote currentQuote={this.state.currentQuote} />
      </div>
    );
  }
}

export default Content;
