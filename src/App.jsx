import logo from "./logo.svg";
import "./App.css";
import { Cabecera } from "./components/cabecera/cabecera";
import { Info } from "./components/info/info";

function App() {
  return (
    <div>
      <Cabecera></Cabecera>
      <Info></Info>
    </div>
  );
}

export default App;
