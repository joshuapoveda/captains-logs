import React from 'react'

const Edit = (props) => {
    const logs = props.logs
  return (
    <div>
<form action={`${logs.id}?_method=PUT`} method="POST">
          title: <input type="text" name="title" defaultValue={logs.title}/><br/>
          Entry: <input type="text" name="entry"  defaultValue={logs.entry}/><br/>
          Is ship broken:
              {logs.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    </div>
  )
}

export default Edit