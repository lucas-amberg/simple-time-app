import DateHeading from "./components/DateHeading"
import Time from "./components/Time"

function App() {
  const currentDate: Date = new Date();
  return (
    <>
      <DateHeading date={currentDate}/>
      <Time date={currentDate}/>
    </>
  )
}

export default App
