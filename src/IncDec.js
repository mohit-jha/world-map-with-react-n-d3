import React, { useState } from "react";
export default function IncDec() {
  const [count, setstate] = useState(0);
  function handleClick_inc() {
    setstate(count + 1);
  }

  function handleClick_dec() {
    setstate(count - 1);
  }
  return (
    <div className="mid" style={{ margin: "300px 600px" }}>
      <h1> {count}</h1>
      <button onClick={handleClick_inc}>click+</button>
      <br />
      <button onClick={handleClick_dec}>click -</button>
    </div>
  );
}
