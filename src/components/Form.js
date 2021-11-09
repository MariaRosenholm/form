import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <div className="inputs">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            onChange={props.change}
          />
        </div>
        <div className="inputs">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
            onChange={props.change}
          />
        </div>
        <div className="inputs">
          <label htmlFor="number">Phone number</label>
          <input
            type="text"
            name="number"
            id="number"
            required
            onChange={props.change}
          />
        </div>
        <div className="inputs">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            onChange={props.change}
          ></textarea>
        </div>
        <div className="inputs">
          <label htmlFor="role">Role</label>
          <select name="role" id="role" onChange={props.change}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <input type="submit" value="SEND" />
      </form>
    </div>
  );
};

export default Form;
