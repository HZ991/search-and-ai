import './App.css';
import InputBar from './components/InputBar.jsx'
import Logo from './components/Westpac-Logo.png';
import PadlockIcon from './components/PadlockIcon.jsx'
import Header from './components/Header.jsx';
import BlockLink from './components/BlockLink.jsx';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'left',
            marginLeft: "16px"
          }}
          className='fastTrack'>Fast Track Your Savings Goals</div>
        <div
          style={{ 
            fontSize: '12px',
            marginLeft: "16px",
            textAlign: 'left' 
          }}
        >T&Cs apply</div>
        <div className='blockLink-container'>
          <BlockLink
            text = "Manage goals"
          />
          <BlockLink
            text="Regular deposit"
          />
        </div>
        
        {/* <p>
          Search Bar
        </p> */}
        <InputBar />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>

    </div>
  );
}

export default App;
