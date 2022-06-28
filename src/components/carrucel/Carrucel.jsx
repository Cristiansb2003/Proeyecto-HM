import st from "./carrucel.module.css";

const ima = new URL("../../utils/actividad-piloto/1.jpg", import.meta.url);
const tri = new URL("../../utils/img/triangulo.png", import.meta.url);
const rayas = new URL("../../utils/img/lineas.png", import.meta.url);
export function Carrucel() {
  return (
    <div>
      <div className={st.contenedor}>
      <div className={st.con_f1}>
        <img src={tri}/>
      </div>
        <div className={st.con_marco}>
          <div className={st.marco}>
            <div className={st.imagen}>
              <img src={ima} />
            </div>
          </div>
        </div>
        <div className={st.con_tri}>
          <div className={st.tria}>
            <img src={rayas}/>
          </div>
        </div>
      </div>
    </div>
  );
}
