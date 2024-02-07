export const First = () => {
  //sätter x och y till fasta värden
  let x = 4;
  let y = 17;
  //funktion för att sumera x + y efter knapptryck
  const addNumbers = () => {
    let sum = x + y;
    //letar upp elementet med id sumElement och sätter värdet av sum
    document.getElementById("sumElement").innerText = sum;
  };

  return (
    <div>
      <h1>adderare</h1>
      <input type="number" defaultValue={x} />{" "}
      <input type="number" defaultValue={y} />
      <button onClick={addNumbers}>add</button>
      <h1 id="sumElement"></h1>
    </div>
  );
};
