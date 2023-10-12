import './App.css';
import { NavArea } from './components/NavArea.js'
// import { MainArea } from './components/MainArea.js'
import { FooterArea } from './components/FooterArea.js'

function App() {
  let show = false

  return (
    <div className="App">


      <div className='header-nav'>
        <NavArea />


      </div> 


      {/* <MainArea /> */}

      { show ? 
      <FooterArea /> 
      : null }

    </div>
  );
}

export default App;
