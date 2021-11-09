import React from "react";

const close = () => {
  window.location.reload();
};

const PopUp = (props) => {
  return (
    <div id="popUp">
      <div id="card">
        <h2>Your message: </h2>
        <ul>
          <li>First name: {props.firstname}</li>
          <li>Last name: {props.lastname}</li>
          <li>Phone number: {props.number}</li>
          <li>Message: {props.message}</li>
          <li>Role: {props.role}</li>
        </ul>
        <div id="buttons">
          <button name="showPopUp" onClick={close}>
            YES, I AM SURE
          </button>
          <button name="showPopUp" onClick={close}>
            NO, I DON'T WANT TO SEND
          </button>
        </div>
      </div>
      <div id="overlay"></div>
    </div>
  );
};

export default PopUp;
