import React from "react";
import TextBanner from "./TextBanner.js";
import Welcome from "./Welcome.js";
import Content from "./Content.js";

class App extends React.Component {
  render() {
    return (
      <>
        <Welcome />
        <TextBanner />
        <Content />
      </>
    );
  }
}

export default App;
