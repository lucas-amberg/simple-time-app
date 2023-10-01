//import React from 'react'

type DateProps = {date: Date}

const months: string[] = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const DateHeading = ({date}:DateProps) => {
  return (
    <h1>Hello. It is {weekdays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}. </h1>
  )
}

export default DateHeading