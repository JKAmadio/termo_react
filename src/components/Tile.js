import React from "react";
import PropTypes from "prop-types";

function Tile({ buttonClicked, onKeyDown, isActive, index, content }) {
  return (
    <button
      data-testid={`tile_button_${index}`}
      onClick={buttonClicked}
      onKeyDown={onKeyDown}
      className={`w-fit h-fit m-5 p-5 border-4 border-solid rounded-md align-middle font-bold
                  ${isActive ? 'border-white' : 'border-red-300'}`}
    >
      { content }
    </button>
  );
}

Tile.propTypes = {
  buttonClicked: PropTypes.func,
  onKeyDown: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number,
  content: PropTypes.string.isRequired
};

export default Tile;
