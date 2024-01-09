import React from 'react';
import './App.css';
import NormalFetch from './fetchFunctions/NormalFetch';
import AsynFunction from './fetchFunctions/AsyncAWait';


function App() {

  
  return (
    <div className="App">
      <h1>Hello World</h1>
  

      <NormalFetch />
      <AsynFunction />
    </div>
  );
}

export default App;
