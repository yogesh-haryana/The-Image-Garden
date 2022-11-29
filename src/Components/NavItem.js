import React from 'react';
import PropTypes from 'prop-types';
import Picture from './Picture';
import usestyles from './NavItemStyles';

function NavItem({ query }) {
  const classes = usestyles();
  return (
    <div>
      <h2 className={classes.heading}>
        {query}
        {' '}
        images
        {' '}

      </h2>
      <Picture query={query} />
    </div>
  );
}

NavItem.propTypes = {
  query: PropTypes.string.isRequired,

};

export default NavItem;
