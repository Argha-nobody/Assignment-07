import React, { useEffect, useState } from 'react';


const Load = ( {added} ) => {
    const [player, setPlayer] = useState([]);
 
    useEffect(() => {
      fetch("data.json")
        .then(res => res.json())
        .then(data => setPlayer(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className=' lg:grid grid-cols-3 p-24 gap-5  '>
            
            {
                player.map( load =>

                  <div 
                  key={load.id}  
                  load={load}  
                  className='border-2 p-2 rounded-xl'>

                   <img className='rounded-xl' src={load.picture} alt={load.name} />
                   <h2 className='font-bold text-xl mt-5'>{load.name}</h2>
     
                     <div className='flex justify-between'>
                     <p className='mt-2'> {load.country} </p>
                     <button className='bg-slate-100 p-2 rounded-lg'> All Rounder </button>
                     </div>

                     <hr  className='my-3' />
                     <h2 className='font-bold  p-2  '> Rating </h2>
                     <h2 className='font-bold  p-2 '> {load.battingStyle} -bat </h2>
                     <div className='flex justify-between p-2'>
                      <h2 className='font-bold mt-2'> Price:  ${load.price} </h2>
                      <button onClick={ () => added(load) }  className=' text-base bg-gradient-to-r from-slate-900 to-slate-700 text-zinc-200 font-bold border-2 p-2 rounded-lg' > Choose Player </button>
                     </div>

                 </div>
                  
                  
                )
            }

        </div>
    );
};

export default Load;