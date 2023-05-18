import React from "react";

const Index = (props) => {
  const logs = props.logs;
  return (
    <div>
      <h1>
        Add new log <a href="/new">here</a>
      </h1>
      {logs.map((log) => {
        return (
          <>
            <h3>{log.title}:</h3>
            <p>
              <a href={`/${log.id}`}>{log.entry}</a>
            </p>
            <p>{log.shipIsBroken ? "ship is broken" : "ship is fine"}</p>
            <form action={`/${log.id}?_method=DELETE`} method="POST">
              <input type="submit" value="DELETE" />
            </form>
            <a href={`/${log.id}/edit`}>Edit Log</a>
            <br></br>
          </>
        );
      })}
    </div>
  );
};

export default Index;
