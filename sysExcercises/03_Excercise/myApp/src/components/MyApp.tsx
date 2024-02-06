import { useState } from "react";

export const MyApp = () => {
  const [counter, setCounter] = useState(0);

  const clickMe = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
        <p>{counter}</p>
      <button onClick={clickMe}>klicka här</button>
    </div>
  );
};
