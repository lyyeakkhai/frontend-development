
import Card from './components/Card';
import { PLAYER_DATA } from './data';

function App() {


  return <>
    <header className='header'>
    <h1>Football Players</h1>
    <p>These are the GOATs</p>
  </header>
    <div className="card-container">
      {PLAYER_DATA.map(player => (
        <Card key={player.id} {...player} />
      ))}
    </div>
  </>;
}

export default App;
