const View = ({ firstname, lastname, number, message, role }) => {
  return (
    <div id="viewMain">
      <div id="view">
        <div id="red">
          <p>First name </p> <div>{firstname}</div>
        </div>
        <div id="red">
          <p>Last name </p> <div>{lastname}</div>
        </div>
        <div id="red">
          <p>Phone number </p> <div>{number}</div>
        </div>
        <div id="red">
          <p>Message </p>
          <div>{message}</div>
        </div>
        <div id="red">
          <p>Role </p>
          <div>{role}</div>
        </div>
      </div>
    </div>
  );
};

export default View;
