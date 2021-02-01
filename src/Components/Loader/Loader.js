import React from 'react';
import { css } from '@emotion/core';
import PropagateLoader from 'react-spinners/PropagateLoader';
function Loader() {
  return (
    <PropagateLoader
      css={css`
        margin-top: 80px;
      `}
      size={20}
      color={'red'}
      loading={true}
    />
  );
}

export default Loader;
