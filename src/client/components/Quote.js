import React, { useState } from "react";

const Quote = ({ currentQuote }) => {
  return (
    <div className="quote-block">
      <p className="quote-text">{currentQuote}</p>
    </div>
  );
};

export default Quote;
