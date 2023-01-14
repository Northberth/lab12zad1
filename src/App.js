import './App.css';
import Main from './Main';
import {Link} from 'react-router-dom';
function App() {



  return (
    <div className="App">
      <header className="App-header">
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <hr />
        <Main />       
      </div>
      </header>
    </div>
  );
}

export default App;
