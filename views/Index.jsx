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
            <h3>
              {log.title} <a href={`/${log.id}`}>{log.entry}</a>
            </h3>
            <p>{log.readyToEat ? "Ready to eat." : "Not ready to eat."}</p>
            <form action={`/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
                <a href={`/${log._id}/edit`}>Edit This Fruit</a>
            <br></br>
          </>
        );
      })}
    </div>
  );
};

export default Index;
