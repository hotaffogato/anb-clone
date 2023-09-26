import './App.css';
import { NavTop, NavBottom } from './components/NavArea.js'
import { MainArea } from './components/MainArea.js'
import { FooterArea } from './components/FooterArea.js'

function App() {
  let show = false

  return (
    <div className="App">

      {show?
      <div className='header-nav'>
        <NavTop />
        <div className='divider-column' />
        <NavBottom />
      </div> 
      : null }

      <MainArea />

      { show ? 
      <FooterArea /> 
      : null }

    </div>
  );
}

export default App;
