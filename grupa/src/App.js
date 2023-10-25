import './App.css';
import Games from './components/games.js';
import Header from './components/header.js';

function App() {
  return (
    <>
        <Header />
        <div className="image-box">
          <img className="background-image" src="https://external-preview.redd.it/anocBu6nhCUnoAg72EkRw54lnYVJX2jByx50-Zt1Np0.jpg?width=1080&crop=smart&auto=webp&s=7db8fff8d732add34ec2a88b743962477039fcc6"></img>
        </div>
        <Games />
    </>
  );
}

export default App;
