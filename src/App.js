import React, { Component } from "react";

import Phonebook from "./components/phonebook/Phonebook";
import RegisterView from "./components/views/RegisterView";
class App extends Component {
  render() {
    return (
      <>
        <RegisterView />
        {/* <Phonebook/> */}
      </>
    );
  }
}

export default App;
