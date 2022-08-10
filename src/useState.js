import React, { useState } from "react";

const Update = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    setCounter(counter - 1);
  };
  const handleChange = (e) => {
    let currentCount = e.target.value;
    setCounter(currentCount);
  };
  return (
    <div>
      <button className="btn btn-primary me-2" onClick={handleIncrease}>
        Increase
      </button>
      <button className="btn btn-primary me-2" onClick={handleDecrease}>
        Decrease
      </button>

      <input type="text" placeholder="type here" onChange={handleChange} />
      <h3>{counter}</h3>
    </div>
  );
};

// const Valid = () => {
//     const [value]
// }

export default Update;
