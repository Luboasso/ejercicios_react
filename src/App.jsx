import "./App.css";
import Person from "./components/Person/Person";

function App() {
  return (
    <div>
      <div>
        <Person name="Lu" surname="Boasso" age="20" />
      </div>
      <div>
        <Person name="Elena" surname="García" age={25} />
      </div>
      <div>
        <Person name="Carlos" surname="Martinez" age={35} />
      </div>
    </div>
  );
}

export default App;
