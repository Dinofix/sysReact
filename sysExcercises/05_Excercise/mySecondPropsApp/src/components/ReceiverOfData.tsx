import { useState } from "react";

interface IReceiveDataProps {
  qwerty: string;
  onQwertyChange: (newValue: string) => void;
  positive: number;
  answer: boolean;
}

export const ReceiverOfData = (props: IReceiveDataProps) => {
  const [userInput, setUserInput] = useState("");

  const buttonSpara = () => {
    props.onQwertyChange(userInput);
  };
  return (
    <div>
      <q>{props.qwerty}</q>
      <p>{props.positive}</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={buttonSpara}>spara</button>
      <h4>
        {" "}
        <input type="checkbox" checked={props.answer} />
      </h4>
    </div>
  );
};
