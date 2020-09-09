import React from "react";
import { AppBar, Tabs, Tab, PhoneIcon } from "@material-ui/core";

const Navbar = ({ view, handleQuoteChange, handleViewChange }) => {
  return (
    <div className="navbar">
      <Tabs centered>
        <Tab
          value={0}
          index={0}
          label="Random quote"
          onClick={() => {
            if (view === "quote") {
              handleQuoteChange();
            } else {
              handleViewChange("quote");
            }
          }}
        />
        <Tab
          onClick={() => handleViewChange("search")}
          value={1}
          index={1}
          label="Start search"
        />
        <Tab value={2} index={2} label="Favorites" />
      </Tabs>
    </div>
  );
};

export default Navbar;
