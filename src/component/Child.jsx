import { useState } from "react";

function Child({ changeData }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSendData = () => {
    changeData(input);
  };

  return (
    <>
      <input type="text" onChange={handleInput} value={input} />
      <br />
      <br />
      <button onClick={handleSendData}>Send Data Parent</button>
    </>
  );
}

export default Child;
