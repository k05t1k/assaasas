import React from 'react';

import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

const App = () => {
  return (
    <div className="grid-container">
      <LeftColumn/>
      <RightColumn/>
    </div>
  );
}

export default App;
