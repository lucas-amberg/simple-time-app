import React from 'react'

type DateProps = {date: Date}

const DateHeading = ({date}:DateProps) => {
  return (
    <h1>Hello! It is {date.getDay()}, {date.getMonth()} {date.getDate()}. </h1>
  )
}

export default DateHeading