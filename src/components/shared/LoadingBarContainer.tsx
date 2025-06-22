import React from 'react';
import LoadingBar from 'react-top-loading-bar';

type LoadingBarContainerProps = {
  color?: string;
  height?: number;
  shadow?: boolean;
};

const LoadingBarContainer: React.FC<LoadingBarContainerProps> = ({
  color = '#1976d2', // MUI primary blue
  height = 3,
  shadow = true,
}) => {
  return <LoadingBar color={color} height={height} shadow={shadow} />;
};

export default LoadingBarContainer;
