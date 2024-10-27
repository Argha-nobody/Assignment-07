import React, { useEffect, useState } from 'react';
import Loadplayer from './Loadplayer';
import { data } from 'autoprefixer';

const Load = () => {
    const [player, setPlayer] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const handlePlayerSelect = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
    setSelectedCount(selectedCount + 1);
  };
  
    useEffect(() => {
      fetch("data.json")
        .then(res => res.json())
        .then(data => setPlayer(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className=' lg:grid grid-cols-3 p-24 gap-5  '>
            
            {
                player.map( load => <Loadplayer  
                key={load.id}  
                load={load}> 
                
                </Loadplayer>)
            }

        </div>
    );
};

export default Load;