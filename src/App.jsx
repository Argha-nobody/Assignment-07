import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='flex justify-between px-14 py-8'>

        <div> <img src="logo.png" alt="" /> </div>

        <div>

          <button> Home </button>
          <button> Fixture </button>
          <button> Team </button>
          <button> Schedule </button>
          <button> <span> 0 </span> Coin </button>

        </div>

      </div>
      
      
    </>
  )
}

export default App
