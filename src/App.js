import React from 'react';
import './App.css';
import NormalFetch from './fetchFunctions/NormalFetch';
import AsynFunction from './fetchFunctions/AsyncAWait';
import UserForm from './formData/Form';


function App() {

  
  return (
    <div className="App">
      <h1>Hello World</h1>
  

      <NormalFetch />
      <AsynFunction />
      <UserForm/>
    </div>
  );
}

export default App;
