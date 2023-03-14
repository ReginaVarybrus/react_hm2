import logo from './logo.svg';
import './App.css';
import { MyClock, CheckClock } from './components/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyClock 
          src={'https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp'}
          name={'Image'}/>
        
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
