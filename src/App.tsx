import DateHeading from "./components/DateHeading"
import Nightmode from "./components/Nightmode";
import Time from "./components/Time"
import {useState} from "react"

document.body.classList.add("dark-mode");

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
      <div>
        <Nightmode/>
      </div>
    </>
  )
}

export default App
