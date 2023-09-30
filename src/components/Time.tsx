//import React from 'react'
type TimeProps = {date: Date};

function checkMeridiem(date: Date): string {
    if (date.getHours() > 12) return "PM";
    return "AM";
}

function checkTime(date:Date): number {
    if (date.getHours() > 12) return date.getHours() - 12;
    return date.getHours();
}

const Time = ({date}:TimeProps) => {
    let meridiem: string = checkMeridiem(date);
    let hours: number = checkTime(date);
  return (
    <div className = "time-subtext">The current time is {hours}:{date.getMinutes()}{meridiem}</div>
  )
}
export default Time