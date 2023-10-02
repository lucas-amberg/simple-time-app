function changeMode(): void {
    document.body.classList.toggle("dark-mode")
}

const Nightmode = () => {
  return (
    <button className='dark-toggle' onClick={changeMode}>Toggle Dark Mode</button>
  )
}

export default Nightmode