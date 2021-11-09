import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import View from "./components/View";
import PopUp from "./components/PopUp";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    number: "",
    message: "",
    role: "Student",
    showPopUp: false,
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopUp: true });
  };

  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      number: this.state.number,
      message: this.state.message,
      role: this.state.role,
    };

    return (
      <main>
        <h1>Leave me a message! </h1>
        <div className="App">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View {...props} />
          {this.state.showPopUp && <PopUp {...props} />}
        </div>
      </main>
    );
  }
}

export default App;
