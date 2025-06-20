import React from 'react';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarContainer = ({ color, height, shadow }: { color: string; height: number; shadow: boolean }) => (
  <LoadingBar color={color} height={height} shadow={shadow} />
);

export default LoadingBarContainer;