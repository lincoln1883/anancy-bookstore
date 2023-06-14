import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button type="button" className="bg-blue-700 text-white text-sm rounded-md h-8 w-24 " onClick={onClick}>{children}</button>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
