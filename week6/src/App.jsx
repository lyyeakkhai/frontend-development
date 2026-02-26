import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { PYTHON_RESULTS, JAVA_RESULTS, HTML_RESULTS, ENGLISH_RESULTS }  from "./data";


function App() {
  return (
    <>
      <Header name="Student Scores" pnLogo={pnLogo} />

      <main className="scores-container">
        <Scores courseName="Python" students={PYTHON_RESULTS} />
        <Scores courseName="Java" students={JAVA_RESULTS} />
        <Scores courseName="HTML" students={HTML_RESULTS} />
        <Scores courseName="English" students={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
