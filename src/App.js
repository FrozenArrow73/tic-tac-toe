import React, {useState} from 'react';
import './App.css';
import Square from './Square';

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState(true)

  return (
    <div className="App">
      <div className='container'>
        {squares.map((val, index)=>{
          return <Square
          squareValue={val}
          index={index} 
          squares={squares}
          setSquares={setSquares}
          player={player}
          setPlayer={setPlayer}
        />
        })}
      </div>
    </div>
  );
}

export default App;
