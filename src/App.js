import React from 'react';
import './App.css';

const Slot = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if ((x === y) && (y === z)) {
    return (<>
      <h1>{x} {y} {z}</h1>
      <h3 className='head'> This is Matching</h3>
    </>
    )
  }
  else {
    return (
      <>
        <h1>{x} {y} {z}</h1>
        <h3 className='head'>This is not Matching</h3>
      </>
    )
  }
}

const App = () => {
  return (
    <>
      <h1 className='heading'>🎰 Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game 🎰</span></h1>
      <div className='body'>
        <div className='slot'>  
          <div className="item">
          <hr />
            <Slot x='😄' y='😄' z='😄' />
            <hr />
          </div>
          <div className="item">
            <Slot x='😄' y='😢' z='🎅' />
            <hr />
          </div>
          <div className="item">
            <Slot x='🍌' y='🍎' z='🥭' />
            <hr />
          </div>
          <div className="item">
            <Slot x='👼' y='👼' z='👼' />
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
