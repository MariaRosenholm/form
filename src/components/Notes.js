import React from "react";

const Notes = ({ firstname, lastname, number, message, role }) => {
  return (
    <div id="notes">
      <h3>
        {firstname.substring(0, 1).toUpperCase() + firstname.substring(1)}{" "}
        {lastname.substring(0, 1).toUpperCase() + lastname.substring(1)}
        <span className="role">{`, ${role}`}</span>
      </h3>
      <p>Phone number: {number}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default Notes;
