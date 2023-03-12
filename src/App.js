import logo from './logo.svg';
import './App.css';
import { MyClock } from './components/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyClock src={logo}>Image</MyClock>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
