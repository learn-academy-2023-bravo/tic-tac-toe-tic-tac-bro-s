import React from 'react'

const Square = ({index, value, handleGamePlay}) => {
  const handleClick = () => {
    if(value === null){
      handleGamePlay(index) 
    } else {
      alert("square has been played")
    }
  }
  return (
    <div className="square" onClick={handleClick}>{value}</div>
  )
}
export default Square
