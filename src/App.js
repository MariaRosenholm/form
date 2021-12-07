import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import View from "./components/View";
import PopUp from "./components/PopUp";
import Notes from "./components/Notes";
import axios from "axios";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      number: "",
      message: "",
      role: "",
    },
    showPopUp: false,
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3002/messages")
      .then((res) => this.setState({ data: res.data }));
  }

  inputHandler = (e) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [e.target.name]: e.target.value,
      },
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopUp: true });
  };

  postHandler = () => {
    axios
      .post("http://localhost:3002/messages", this.state.inputData)
      .then((res) => {
        console.log(res);
        this.setState({ showPopUp: false });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <main>
        <h1>Leave me a message! </h1>
        <div className="App">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View {...this.state.inputData} />
          {this.state.showPopUp && (
            <PopUp {...this.state.inputData} postIt={this.postHandler} />
          )}
        </div>
        <div id="notesWrapper">
          {this.state.data.map((note) => (
            <Notes
              {...note}
              key={note.id}
            /> /*This key thingi takes the error away from the console.*/
          ))}
        </div>
      </main>
    );
  }
}

export default App;
