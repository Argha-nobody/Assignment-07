import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SiBitcoinsv } from "react-icons/si";
import Load from './loadData/Load';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* NAVBAR  */}
      
      <div className='flex justify-between px-24 py-8'>

        <div> <img src="logo.png" alt="" /> </div>

        <div>

          <button className=' ml-5 mr-5 px-3 text-gray-700 '> Home </button>
          <button className=' ml-5 mr-5 px-3 text-gray-700 '> Fixture </button>
          <button className=' ml-5 mr-5 px-3 text-gray-700 '> Team </button>
          <button className=' ml-5 mr-5 px-3 text-gray-700 '> Schedule </button>
          <button className=' ml-5 mr-5 px-3 border-2 rounded-lg p-1 font-semibold  '> <span> 0 </span> Coin  </button>

        </div>

      </div>

      <div  className=' text-center max-w-6xl mx-auto h-[430px] bg-gradient-to-r from-black via-gray-900 to-pink-400
      rounded-2xl'>

        <img className='mx-auto py-6' src="banner-main.png" alt="" /> 
        <h1 className='text-white text-4xl font-bold'> Assemble Your Ultimate Dream 11 Cricket Team </h1>
        <h3 className=' py-4 text-gray-400 text-xl '> Beyond Boundaries Beyond Limits </h3>
        <button className='border-2 border-black  font-semibold text-base bg-lime-500 py-2 px-3 rounded-xl outline-double outline-inherit text-black '> Claim Free Credit </button>

      </div>

      {/* PLAYER SECTION  */}

      <div className='mt-10'>

        <div className='flex justify-between px-24'> 

          <div> <h1 className='text-xl font-bold text-black'> Available Players</h1> </div>

          <div className='flex'> <button className='px-3 py-2 font-semibold text-black rounded-xl bg-lime-400'> Available  </button>
                 <button className='px-3 py-2 rounded-xl bg-white border-2' > Selected </button> 
          </div>


        </div>

       



      </div>

       {/* LOADING DATA HERE  */}

       <Load>   </Load>

      {/* FOOTER SECTION  */}

      <div className=' mt-10 lg:w-[1340px] bg-slate-950 '>

        {/* CARD SECTION  */}

        <div className='  mb-10 rounded-3xl mx-auto lg:w-[1100px] h-72 bg-gradient-to-r from-sky-200 to-orange-100 text-center 
         outline outline-8 outline-grey-500'>

          <div className='p-5'>
              <h1 className=' mt-16 text-2xl font-bold text-black'> Subscribe to our Newsletter </h1>
              <p className=' mt-3 text-gray-700' > Get the latest updates and news right in your inbox! </p>
              <div className='  flex justify-center gap-5 mt-5 '>
              <input className=' border-2  w-full lg:w-56  h-10 text-black bg-white  p-4 rounded-lg' type="text"     placeholder='Enter Your Email' />
              <button className=' w-full lg:w-32 bg-cyan-800 rounded-lg text-white text-base font-bold'>     Subscribe  </ button>
              </div>
    </div>

        </div>

      <img className='mx-auto mt-15' src="logo-footer.png" alt="" />

      <div className="footer mt-10  text-base-content p-10 flex flex-col lg:flex-row gap-10">

        
  {/* First Section */}
  <nav className="flex-1">
    <div className="flex">
      <h6 className="text-white font-bold text-2xl">About us</h6>
    </div>
    <div className="mt-5">
      <p className='text-white'> We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
      <div className="flex gap-5 mt-5">
        <img src="https://img.icons8.com/?size=48&id=9a46bTk3awwI&format=png" alt="Icon 1" />
        <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="Icon 2" />
        <img src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png" alt="Icon 3" />
        <img src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png" alt="Icon 4" />
      </div>
    </div>
  </nav>

  {/* Second Section */}
  <nav className="flex-1">
    <h6 className="text-white font-bold mb-5">Quick Links</h6>
    <a href="#" className="link link-hover text-gray-500 block">Home</a>
    <a href="#" className="link link-hover text-gray-500 block">About us</a>
    <a href="#" className="link link-hover text-gray-500 block">Foundation</a>
    <a href="#" className="link link-hover text-gray-500 block">Contact</a>
    <a href="#" className="link link-hover text-gray-500 block">More</a>
  </nav>

  {/* Third Section (Subscribe) */}
  <div className="">
    <h6 className="text-white mb-3">Subscribe</h6>
    <h6 className="text-white mb-3">Subscribe to our newsletter <br /> to get updates</h6>
    {/* <input type="text" placeholder="Enter Your Email" className="w-full lg:w-56 h-10 text-white bg-gray-800 p-4 rounded-lg mb-3" />
    <button className="w-full lg:w-56 h-10 bg-cyan-800 rounded-lg text-white text-base font-bold">Subscribe</button> */}
    <div className='flex mt-5'>
      <input className='w-full lg:w-56  h-10 text-black bg-white  p-4 rounded-l-lg' type="text" placeholder='Enter Your Email' />
      <button className='w-full lg:w-32 bg-cyan-800 rounded-r-lg text-white text-base font-bold'> Subscribe</button>
    </div>

  </div>

</div>

<hr className=' mx-auto w-[1340px] h-4 text-white' />
<p className='text-center text-gray-500'>@2024 Your Company All Rights Reserved.</p>


      </div>


      

      
      
      
    </>
  )
}

export default App
