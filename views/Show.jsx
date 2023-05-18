import React from "react";

const Show = (props) => {
  const logs = props.logs;
  return (
    <div>
        <h2>Behold!</h2>
      <h4>{logs.title} {logs.entry}</h4>
      <h3>{(logs.shipIsBroken)?'Ship is broken':'Ship aint broken'}</h3>
      <p><a href='/'>Go Back</a></p>
    </div>
  );
};

export default Show;
