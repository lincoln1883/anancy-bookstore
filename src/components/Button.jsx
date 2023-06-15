import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button type="button" className="bg-blue-500 text-white text-sm rounded-md h-10 w-48 uppercase" onClick={onClick}>{children}</button>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
