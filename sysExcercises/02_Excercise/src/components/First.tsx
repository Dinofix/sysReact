import { useState } from "react";

export const Second = () => {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);

  const sumButton = () => {
    setInputValue1(
      parseInt((document.getElementById("input1") as HTMLInputElement).value)
    );
    setInputValue2(
      parseInt((document.getElementById("input2") as HTMLInputElement).value)
    );
  };

  return (
    <div>
      <input type="number" id="input1" />
      <button onClick={sumButton}>+</button>
      <input type="number" id="input2" />
      <p>{inputValue1 + inputValue2}</p>
    </div>
  );
};
