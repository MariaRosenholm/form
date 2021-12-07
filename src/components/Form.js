import React from "react";

const Form = ({ change, submit }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <div className="inputs">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            onChange={change}
          />
        </div>
        <div className="inputs">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
            onChange={change}
          />
        </div>
        <div className="inputs">
          <label htmlFor="number">Phone number</label>
          <input
            type="number"
            name="number"
            id="number"
            required
            onChange={change}
            placeholder="00358..."
          />
        </div>
        <div className="inputs">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            onChange={change}
            maxLength="25"
            placeholder="Max 25 characters"
          ></textarea>
        </div>
        <div className="inputs">
          <label htmlFor="role">Role</label>
          <select name="role" id="role" onChange={change} required>
            <option value="">Choose a role...</option>
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
