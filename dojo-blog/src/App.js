import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Hey Maeliño'
  const likes = 50

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Chase liked your butt {likes} times</p>
      </div>
    </div>
  );
}

export default App;
