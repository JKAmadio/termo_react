import React, { useState } from 'react';
import Tile from './Tile';

function Tiles() {
  const initialTiles = [
    {
      id: 0,
      content: '',
      isActive: false
    },
    {
      id: 1,
      content: '',
      isActive: true
    },
    {
      id: 2,
      content: '',
      isActive: false
    },
    {
      id: 3,
      content: '',
      isActive: false
    },
    {
      id: 4,
      content: '',
      isActive: false
    }
  ];

  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ tiles, setTiles ] = useState(initialTiles);

  const handleKeyDown = (e) => {
    let isLetter = checkIsLetter(e.key);
    let isArrow = checkIsArrow(e.key);
    let isBackspace = checkIsBackspace(e.key);

    if (!isLetter && !isArrow && !isBackspace)
      return;

    if (isLetter)
      updateTileContent(activeIndex, e.key);

    if (isBackspace)
      updateTileContent(activeIndex, '');

    if (isArrow)
      updateActiveTile(e.key);
  }

  const checkIsLetter = (key) => {
    return key.length === 1 && key.match(/[a-zA-Z]/i);
  }

  const checkIsArrow = (key) => {
    return key === 'ArrowLeft' || key === 'ArrowRight';
  }

  const checkIsBackspace = (key) => {
    return key === 'Backspace';
  }

  const updateTileContent = (id, key) => {
    const updateTiles = [];
    tiles.map(tile => {
      if (tile.id === id) {
        tile.content = key.toUpperCase();
      }
      updateTiles.push(tile);
    })

    setTiles(updateTiles);
  }

  const updateActiveTile = (key) => {
    if (key === 'ArrowLeft') {
      if (activeIndex === 0)
        setActiveIndex(tiles.length - 1);
      else
        setActiveIndex(activeIndex - 1);
    }

    if (key === 'ArrowRight') {
      if (activeIndex === tiles.length - 1)
        setActiveIndex(0);
      else
        setActiveIndex(activeIndex + 1);
    }
  }

  return <div className='flex'>
    { tiles.map((tile, index) =>
      <Tile
        key={index}
        isActive={tile.id === activeIndex}
        index={tile.id}
        content={tile.content}
        buttonClicked={() => setActiveIndex(tile.id)}
        onKeyDown={(e) => handleKeyDown(e, tile.id)}
      />
    )}
  </div>
}

export default Tiles;
