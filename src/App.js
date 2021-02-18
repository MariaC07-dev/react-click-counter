import React from "react"

import CountButton from "./components/CountButton"

function App() {
  return (
    <div>
    <h2>Counters</h2>
      <CountButton incrementBy={1} buttonColor={"magenta"} borderRadius={"10px"} title={"Click to increase the counter by 1"}/>
      <CountButton incrementBy={5} buttonColor={"purple"} borderRadius={"15px"} title={"Click to increase the counter by 5"}/>
      <CountButton incrementBy={10} buttonColor={"darkblue"} borderRadius={"20px"} title={"Click to increase the counter by 10"}/>
    </div>
  );
}

export default App;
