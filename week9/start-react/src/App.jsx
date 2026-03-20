import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";

function App() {
  return (
    <div>
      <Header gameName="Monster Slayer" />
      <Game />
      <section className="container">
      <h2>Monster Health</h2>
      <div className="healthbar">
        <div style={{ width: '90%' }} className="healthbar__value"></div>
      </div>
    </section>
    <section className="container">
      <h2>Your Health</h2>
      <div className="healthbar">
        <div style={{ width: '50%' }} className="healthbar__value"></div>
      </div>
    </section>
    <section className="container">
      <h2>Game Over!</h2>
      <h3>You lost!</h3>
      <h3>You won!</h3>
      <button>Start New Game</button>
    </section>
    <section id="controls">
      <button>ATTACK</button>
      <button>SPECIAL !</button>
      <button>HEAL</button>
      <button>KILL YOURSELF</button>
    </section>
    <section id="log" className="container">
      <h2>Battle Log</h2>
      <ul>
        <li>
          <span>Player</span>
          <span> heals for <span className="log--heal">12</span></span>
        </li>
        <li>
          <span>Monster</span>
          <span> attaked for <span className="log--damage">45</span></span>
        </li>
      </ul>
    </section>
    </div>
  );
}

export default App;
