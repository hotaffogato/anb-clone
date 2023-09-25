import './App.css';
import { NavTop, NavBottom } from './components/NavArea.js'
import {MainArea} from './components/MainArea.js'
import {FooterArea} from './components/FooterArea.js'

function App() {
  let show = false

  return (
    <div className="App">
      <NavTop />
      <div className='divider-column' />
      <header className="App-header">
      <NavBottom />
      </header>

      {show ? <MainArea /> : null}
      {show ? <FooterArea /> : null}
      
    </div>
  );
}

export default App;
