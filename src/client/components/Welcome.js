import React, { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";

const Welcome = () => {
  const [isChanged, setButtonChange] = useState(false);

  return (
    <div className="welcome">
      <div className="scroll">
        <ScrollIntoView selector="#scroll-to-content">
          <button
            id="button"
            onMouseEnter={() => setButtonChange(true)}
            onMouseLeave={() => setButtonChange(false)}
          >
            <span className="initial">welcome</span>
            <span className="on-hover">start searching</span>
          </button>
        </ScrollIntoView>

        {isChanged && (
          <p>
            An app that helps you to find the breed that fits your lifestyle
          </p>
        )}
      </div>
    </div>
  );
};

export default Welcome;
