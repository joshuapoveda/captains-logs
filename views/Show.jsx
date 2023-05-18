import React from "react";

const Show = (props) => {
  const logs = props.logs;
  return (
    <div>
    
      <h4>{logs.title}: </h4>
      <p>{logs.entry}</p>
      <h3>{(logs.shipIsBroken)?'Ship is broken':'Ship aint broken'}</h3>
      <p><a href='/logs'>Go Back</a></p>
    </div>
  );
};

export default Show;
