import React from "react";

const Notes = ({ firstname, lastname, number, message, role }) => {
  return (
    <div id="notes">
      <h3>
        {firstname.substring(0, 1).toUpperCase() + firstname.substring(1)}{" "}
        {lastname.substring(0, 1).toUpperCase() + lastname.substring(1)}
      </h3>
      <p>Role: {role}</p>
      <p>Message: {message}</p>
      <p>Phone number: {number}</p>
    </div>
  );
};

export default Notes;
