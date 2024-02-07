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

  // const nombers: number[] = [10, 10, 20, 30, 50, 80, 130];
  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13];

  // foor-loop
  // const lis: JSX.Element[] = [];

  // for (let i = 0; i < numbers.length; i++) {
  //   lis.push(<li>{numbers[i]}</li>);
  // }

  // map
  // const lis = nombers.map((value, i) => {
  //   return <li key={i}>{value} </li>;
  // });

  return (
    <>
      <div>
        <h3>Addition</h3>
        <input type="number" id="input1" /> {" + "}
        <input type="number" id="input2" />
        <button onClick={sumButton}>=</button>
        <p>{inputValue1 + inputValue2}</p>
      </div>
      {/* <ul>
        <h3>1st</h3>
        {lis}
      </ul> */}
      <ul>
        <h3>2nd</h3>
        {numbers.map((value, i) => (
          <li key={i}>{value} </li>
        ))}
      </ul>
    </>
  );
};
