import React from 'react';

const Selected = ({ set }) => {
    return (
        <div className=''>
            
            {
                set.map((player, index) => {
                    return (
                        <div key={index} className='mx-auto my-5 flex lg:w-[1120px] lg:h-[110px] border-2 rounded-lg'>
                            
                            <div>
                               <img className='w-36 p-2' src={player.picture} alt={player.name} />
                            </div>
                            
                            <div className='p-5'>
                                <h1 className='text-xl font-bold'>{player.name}</h1>
                                <h1 className='mt-2'>{player.battingStyle} -bat</h1>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Selected;
