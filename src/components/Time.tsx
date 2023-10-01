//import React from 'react'
type TimeProps = {date: Date};

const Time = ({date}:TimeProps) => {
  return (
    <div className = "time-subtext">The current time is {date.toLocaleTimeString("en-US")}</div>
  )
}
export default Time