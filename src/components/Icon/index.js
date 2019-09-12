import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ id }) {
  return (
    <svg className="svg-icon">
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

Icon.propTypes = {
  /**
   Id of rendered icon.
   */
  id: PropTypes.string.isRequired,
};
