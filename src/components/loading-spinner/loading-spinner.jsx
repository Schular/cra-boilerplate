import React from 'react';
import PropTypes from 'prop-types';

import { LoadingContainer } from './loading-spinner.styles';

const LoadingSpinner = ({ center }) => (
  <LoadingContainer center={center}>
    <div />
    <div />
    <div />
    <div />
  </LoadingContainer>
);

LoadingSpinner.defaultProps = {
  center: true
};

LoadingSpinner.propTypes = {
  center: PropTypes.bool
};

export default LoadingSpinner;
