import logo from "./logo.svg";
import "./App.css";
import { Cabecera } from "./components/cabecera/cabecera";
import { Info } from "./components/info/info";
import { Actividades } from "./components/actividades/actividades";
import { Carrucel } from "./components/carrucel/Carrucel";

function App() {
  return (
    <div>
      <Cabecera></Cabecera>
      <Carrucel></Carrucel>
      <Info></Info>
      <Actividades></Actividades>
    </div>
  );
}

export default App;
