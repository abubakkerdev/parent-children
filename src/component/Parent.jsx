import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [text, setText] = useState("NOTHING");
  const handleChangeText = (data) => {
    setText(data);
  };
  return (
    <>
      <h2>Data Receive From Children: {text}</h2>
      <Child changeData={handleChangeText} />
    </>
  );
}

export default Parent;
