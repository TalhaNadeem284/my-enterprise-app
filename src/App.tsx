import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes/RoutesComponent';
import LoadingBarContainer from './components/shared/LoadingBarContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <LoadingBarContainer color="#37CFF4" height={3} shadow />
        <RoutesComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;