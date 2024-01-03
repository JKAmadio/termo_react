import React, { useState } from 'react';
import Tile from './Tile';

function Game() {
  const [ isActive, setIsActive ] = useState(false);

  return (
    <Tile
      isActive={isActive}
      buttonClicked={() => setIsActive(!isActive)}
    />
  )
}

export default Game;
