import React from "react"

import CountButton from "./components/CountButton"

function App() {
  //props are values that get passed into a component by the component that is rendering it
  //wehn props aren't passed to the component that is rendering it you will get NaN
  //props are external values that get/are passed into a component they are basically arguments that get passed in
  //state is a value that is internal to the component
  //when you pass props toa  acomponent you can make up the names there is no certain rules about that but is obvious you pass a descriptive name of a prop
  return (
    <div>
      <CountButton incrementBy={1} buttonColor={"magenta"} borderRadius={"10px"} title={" Click to increase the counter by 1"}/>
      <CountButton incrementBy={5} buttonColor={"purple"} borderRadius={"15px"} title={"Click to increase the counter by 5"}/>
      <CountButton incrementBy={10} buttonColor={"darkblue"} borderRadius={"20px"} title={" Click to increase counter by 10"}/>
    </div>
  );
}

export default App;
