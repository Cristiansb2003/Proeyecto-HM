import style from "./cabecera.module.css";
import logo from "../../utils/img/HM logo3.png";
export function Cabecera() {
  return (
    <div className={style.contenedor}>
      <div className={style.izq}></div>
      <div className={style.espacio}></div>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.conDer}>
        <div className={style.der}></div>
      </div>
    </div>
  );
}
