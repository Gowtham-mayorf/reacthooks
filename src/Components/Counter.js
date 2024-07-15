import React, { useState } from 'react'


export default function Counter() {
    // const [count,setCount]=useState(80);
    //state variable   state update method

const getCount = () => {
    console.log('running');
    return 50
};
   //function - one time execution
   // const [count,setCount]=useState(() => 80);
    const [count,setCount]=useState(() =>getCount());
    

    const decrement = () => {
        // setCount(count-1);
       // setCount(count-1); not working
       setCount(ps =>ps-1);
       setCount(ps =>ps-1);
       //ps previous state parameter same as also increment 
    } 
    const increment = () => {
        setCount(count+1);
    }

  return (
    <div className='counter'>
        <h1>Counter</h1>
      <span><button  class="btn btn-primary" onClick={decrement}>-</button></span>
      <span>{count}</span>
      <span><button class="btn btn-primary" onClick={increment}>+</button></span>
    </div>
  )
}
