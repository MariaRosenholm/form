import React from "react";

const close = () => {
  window.location.reload();
};

const PopUp = ({ firstname, lastname, number, message, role, postIt }) => {
  return (
    <div id="popUp">
      <div id="card">
        <h2>Your message: </h2>
        <ul>
          <li>
            First name:{" "}
            {firstname.substring(0, 1).toUpperCase() + firstname.substring(1)}
          </li>
          <li>
            Last name:{" "}
            {lastname.substring(0, 1).toUpperCase() + lastname.substring(1)}
          </li>
          <li>Phone number: {number}</li>
          <li>Message: {message}</li>
          <li>Role: {role}</li>
        </ul>
        <div id="buttons">
          <button name="showPopUp" onClick={postIt}>
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
