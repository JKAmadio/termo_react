import React from "react";
import PropTypes from "prop-types";

function Tile({ buttonClicked, isActive, index }) {
  return (
    <button
      data-testid={`tile_button_${index}`}
      onClick={buttonClicked}
      className={`w-fit h-fit m-5 p-5 border-4 border-solid rounded-md align-middle font-bold
                  ${isActive ? 'border-white' : 'border-red-300'}`}
    >
      { isActive ? '1' : '0'} 
    </button>
  );
}

Tile.propTypes = {
  buttonClicked: PropTypes.func,
  isActive: PropTypes.bool,
  index: PropTypes.number
};

export default Tile;
