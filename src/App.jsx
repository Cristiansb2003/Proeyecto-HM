import logo from "./logo.svg";
import "./App.css";
import { Cabecera } from "./components/cabecera/cabecera";
import { Info } from "./components/info/info";
import { Actividades } from "./components/actividades/actividades";
import { Carrucel } from "./components/carrucel/Carrucel";
import { Galeria } from "./components/Galeria/Galeria";
import { Slide } from "./components/slide/Slide";

function App() {
  return (
    <div>
      {/* <Cabecera></Cabecera>
      <Carrucel></Carrucel>
      <Info></Info>
      <Actividades></Actividades>  */}
      {/* <Galeria></Galeria> */}
      <Slide></Slide>
    </div>
  );
}

export default App;
