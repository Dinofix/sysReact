import { useState } from "react";
import "./App.css";
import { ReceiverOfData } from "./components/ReceiverOfData";

function App() {
  const [qwertyValue, setQwertyValue] = useState("");

  const handleQwertyChange = (newValue: string) => {
    setQwertyValue(newValue);
  };

  return (
    <>
      <ReceiverOfData
        qwerty={qwertyValue}
        onQwertyChange={handleQwertyChange}
        positive={69}
        answer={false}
      />
    </>
  );
}

export default App;
