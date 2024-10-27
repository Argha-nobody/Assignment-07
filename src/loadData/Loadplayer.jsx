import React from 'react';
import Add from './Add';

const Loadplayer = ({ load }) => {
  const { id, name, picture, country ,price,battingStyle  } = load;

  

  return (
    <div className='border-2 p-2 rounded-xl'>
      <img className='rounded-xl' src={picture} alt={name} />
      <h2 className='font-bold text-xl mt-5'>{name}</h2>
     
     <div className='flex justify-between'>
     <p className='mt-2'> {country} </p>
     <button className='bg-slate-100 p-2 rounded-lg'> All Rounder </button>
     </div>

     <hr  className='my-3' />
     <h2 className='font-bold  p-2  '> Rating </h2>
     <h2 className='font-bold  p-2 '> {battingStyle} -bat </h2>
     <div className='flex justify-between p-2'>
        <h2 className='font-bold mt-2'> Price:  ${price} </h2>
        <button  className=' text-base bg-gradient-to-r from-slate-900 to-slate-700 text-zinc-200 font-bold border-2 p-2 rounded-lg' > Choose Player </button>
     </div>

    </div>
  );
};

export default Loadplayer;