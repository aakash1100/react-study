import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';

const customStart = () => React.createElement('div', null, "No, start here!")

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );

  // return (
  //   <div className="App">
  //     Start here.
  //   </div>
  // );
  
  //return customStart();
}

export default App;
