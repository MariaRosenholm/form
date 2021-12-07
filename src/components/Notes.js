import React from "react";

const Notes = ({ firstname, lastname, number, message, role }) => {
  return (
    <div id="notes">
      <h3>
        {firstname} {lastname}
      </h3>
      <p>Role: {role}</p>
      <p>Message: {message}</p>
      <p>Phone number: {number}</p>
    </div>
  );
};

export default Notes;
