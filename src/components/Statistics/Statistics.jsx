import React from 'react'

export const Statistics = ({keysArr, valuesArr}) => {
  return (
      <>
      {keysArr.map((item, i) => <p key={item}>{item[0].toUpperCase() + item.slice([1]).toLowerCase()}: {valuesArr[i]}</p>)}
    </>
  )
}
