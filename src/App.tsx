import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/RoutesComponent';
import LoadingBarContainer from './components/shared/LoadingBarContainer';

function App() {
  return (
    <BrowserRouter>
      <LoadingBarContainer color="#37CFF4" height={3} shadow />
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;