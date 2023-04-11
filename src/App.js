import './App.css';
import Square from './Square';

function App() {
  const propsTest = "testing 1 2 3"
  return (
    <div className="App">
      <Square propVar={propsTest}></Square>
    </div>
  );
}

export default App;
