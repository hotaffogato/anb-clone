import './App.css';
import { NavTop, NavBottom } from './components/NavArea.js'
import {MainArea} from './components/MainArea.js'
import {FooterArea} from './components/FooterArea.js'

function App() {
  let show = false

  return (
    <div className="App">
      <NavTop />
      <header className="App-header">
      <NavBottom />
      <div className='divider'></div>
      </header>

      {show ? <MainArea /> : null}
      {show ? <FooterArea /> : null}
      
    </div>
  );
}

export default App;
