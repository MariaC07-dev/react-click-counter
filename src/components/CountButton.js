import React, {  useState } from "react"


const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy)
  }

  const buttonStyle = {
    background: props.buttonColor,
    borderRadius: props.borderRadius,
    color: "white",
    fontSize: "1.5rem",
    marginBottom: "10px",
    marginTop: "20px",
    marginLeft: "50px",
    display: "flex",
    justifyContent: "center",
    padding:"30px"
}

  const countDisplay = {
    color: "white",
    background: "green",
    marginLeft: "10px",
    padding:"30px",
    fontSize: "1.5rem",
    marginBottom: "30px"
  }

  const title = {
    color: "black",
    marginLeft: "10px",
    fontSize: "1.5rem"
  }

  return (
    <div>
      <h4 style={title}>{props.title}</h4>
      <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
      <div style={countDisplay}>{currentCount}</div>
    </div>

  )
}

export default CountButton
