import React from "react";
import PropTypes from "prop-types";

function Tile({ isActive }) {
  return (
    <div
      className={`w-fit h-fit p-5 border-4 border-solid rounded-md align-middle font-bold
                  ${isActive ? 'border-white' : 'border-red-300'}`}
    >
      { isActive ? 'Active' : 'Inactive'} 
  </div>);
}

Tile.propTypes = {
  isActive: PropTypes.bool
};

export default Tile;

