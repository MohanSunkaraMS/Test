import React, { useRef, useState } from 'react';

function App() {
  const inputRef = useRef();
  const [count,setcount] = useState(3)
  // const showValue = () => {
  //   setcount((count=>count+1))
  // };

  return (
    <div>
      <h3>Uncontrolled Input</h3>
      <input 
        type="text" 
        ref={inputRef}
        placeholder="Enter your name"
      />
      {/* <button onClick={showValue}>Show Value</button> */}
      <button onClick={()=>setcount(count=>count+1)}>click me</button>
      <p>{count}</p>
      <p>test1 added</p>
      <p> test 1 added again</p>
    </div>
  );
}

export default App;
