import React from "react";
import { AppBar, Tabs, Tab, PhoneIcon } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const Navbar = ({ view, handleQuoteChange, handleViewChange }) => {
  return (
    <div className="navbar">
      <Tabs centered>
        <Tab
          value={0}
          index={0}
          label="Random quote"
          icon={<FormatQuoteIcon />}
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
          icon={<SearchIcon />}
        />

        <Tab
          value={2}
          index={2}
          label="Favorites"
          icon={<FavoriteBorderIcon />}
        />
      </Tabs>
    </div>
  );
};

export default Navbar;
