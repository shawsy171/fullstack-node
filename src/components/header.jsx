import React from 'react';
import PropTypes from 'prop-types';
/**
 * @param { object } { message }
 * @return { jsx } Header
 */
const Header = ({ message }) => (
  <h2 className="text-center">
    { message }
  </h2>
);

Header.propTypes = {
  message: PropTypes.string.isRequired,
};

Header.defaultProps = {
  message: 'Hello My Man',
};

export default Header;
