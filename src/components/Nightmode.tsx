import React, {useState} from 'react'


function changeMode(): void {
    document.body.classList.toggle("dark-mode")
}

const Nightmode = () => {
    const [style, setStyle] = useState("dark-mode");
  return (
    <button className='dark-toggle' onClick={changeMode}>Toggle Dark Mode</button>
  )
}

export default Nightmode