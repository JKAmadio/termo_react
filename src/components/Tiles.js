import React, { useState } from 'react';
import Tile from './Tile';

function Tiles() {
  const initialTiles = [
    {
      id: 0,
      content: '1',
      isActive: false
    },
    {
      id: 1,
      content: '2',
      isActive: true
    },
    {
      id: 2,
      content: '3',
      isActive: false
    },
    {
      id: 3,
      content: '4',
      isActive: false
    },
    {
      id: 4,
      content: '5',
      isActive: false
    }
  ]

  const [ activeIndex, setActiveIndex ] = useState(0);
  //const [tiles, setTiles] = useState(initialTiles);  

  return <div className='flex'>
    { initialTiles.map((tile, index) => 
      <Tile
        key={index}
        isActive={tile.id === activeIndex}
        index={tile.id}
        buttonClicked={() => setActiveIndex(tile.id)}
      />
    )}
  </div>
}

export default Tiles;
