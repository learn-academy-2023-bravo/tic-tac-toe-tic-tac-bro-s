import React from 'react'

const Square = ({index, value, handleGamePlay}) => {
  const handleClick = () => {
     handleGamePlay(index) 
  }
  return (
    <div className="square" onClick={handleClick}>{value}</div>
  )
}
export default Square
