import React from 'react'

const New = () => {
  return (
    <div>
        <h2>Create a new log:</h2>
        <form action='/logs' method='POST'>
            Title: <input type='text' name='title'/>
            <br/>
            Entry: <input type='textarea' name='entry'/>
            <br/>
            Is the ship broken: <input type='checkbox' name='shipIsBroken'/>
            <br/>
            <input type='submit' name='' value="Create Log"/>
        </form>
        <p><a href='/logs'>Go Back</a></p>
    </div>
  )
}

export default New