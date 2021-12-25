import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div class="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
