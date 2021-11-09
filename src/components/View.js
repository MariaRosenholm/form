const View = (props) => {
  return (
    <div id="viewMain">
      <div id="view">
        <div id="red">
          <p>First name </p> <div>{props.firstname}</div>
        </div>
        <div id="red">
          <p>Last name </p> <div>{props.lastname}</div>
        </div>
        <div id="red">
          <p>Phone number </p> <div>{props.number}</div>
        </div>
        <div id="red">
          <p>Message </p>
          <div>{props.message}</div>
        </div>
        <div id="red">
          <p>Role </p>
          <div>{props.role}</div>
        </div>
      </div>
    </div>
  );
};

export default View;
