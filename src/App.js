import React from 'react'
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import SubContent from './Components/SubContent';
import Navigation from './Components/Navigation';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="container my-4 p-4" style={{background: '#dddddd'}}>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Navigation />
        <Main>
          <div className='row justify-content-between px-3'>
            <SubContent />
            <SubContent />
            <SubContent />
          </div>
          <div className='row'>
            <Advertisement />
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
