import React, { useState } from 'react'

export default function CounterTheme() {
      const [count,setCount]=useState(2);
      const [theme,setTheme]=useState('light');
      const decrement = () => {
        setCount(prevCount => {
          const newCount = prevCount - 1;
          if (newCount === 0) {
            setTheme('dark');
          }
          return newCount;
        });
      };

    // const [state,setState]=useState({
    //     count:45,
    //     theme:'light'
    // });

    // const {count,theme}=state;
    // const decrement = () => {
    //     setState(ps =>{
    //         return{
    //             ...ps,
    //             count:ps.count-1
    //         }
    //     });  
    // }
 
    const increment = () => {
        setCount(ps =>ps+1);
    }
  return (
    <div>
      <span> <button onClick={decrement}>-</button></span>
      <span>{count}</span>
   <span> {theme}</span>
      <span><button onClick={increment}>+</button></span>
    </div>
  )
}
