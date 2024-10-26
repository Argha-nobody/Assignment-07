import React, { useEffect, useState } from 'react';

const Load = () => {
    const [player, setPlayer] = useState([]);
  
    useEffect(() => {
      fetch("data.json")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1> hello </h1>
        </div>
    );
};

export default Load;