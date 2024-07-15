import React from 'react'

export default function StateExample() {
    //let user = "React"
    //statefull varaiablecreate
    const [user,setUser] = React.useState("React")
    const changeName = () => {
        setUser("Angular")
        console.log(user)
    }
  return (
    // <div>
    //   <h1>StateExample</h1>
    // </div>
    <>
    <h1>{user}</h1>
    <button onClick={changeName}>Change</button>
    </>
  )
}
