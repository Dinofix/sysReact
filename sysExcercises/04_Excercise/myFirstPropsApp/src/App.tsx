import "./App.css";
import { ReceiverOfData } from "./components/ReceiverOfData";

function App() {
  return (
    <>
      <ReceiverOfData qwerty="Hello World" positive={69} answer={false}/>
    </>
  );
}

export default App;
