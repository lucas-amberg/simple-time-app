import DateHeading from "./components/DateHeading"
import Time from "./components/Time"
import {useState} from "react"


function App() {
  let currentDate: Date = new Date();
  const [time, setTime] = useState(currentDate);
  function updateTime() {
    const newTime = new Date();
    setTime(newTime);
  }
  setInterval(updateTime, 1000);
  return (
    <>
      <DateHeading date={currentDate}/>
      <Time date={time}/>
    </>
  )
}

export default App
