import React from 'react'

const Square = ({ value, onClick }) => (
  <button className={`square ${value}`} onClick={onClick}>
    {value}
  </button>
)

export default Square
