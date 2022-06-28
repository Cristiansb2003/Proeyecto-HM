import st from "./actividades.module.css";
const ima2 = new URL("../../utils/actividad-piloto/1.jpg", import.meta.url);
const cinta = new URL("../../utils/img/cinta.png", import.meta.url);

export function Actividades() {
  return (
    <div>
      <div className={st.contenedor}>
        <div className={st.titulo}>
          <h3>Actividades</h3>
        </div>
        <div className={st.card}>
          <div className={`${st.act} ${st.act1}`}>
            <div className={st.con_cinta}>
              <img src={cinta} />
            </div>
            <div className={st.titulo}>
              <h3>
                Actividad <br />
                Piloto
              </h3>
            </div>
            <div className={st.con_ima}>
              <img src={ima2} />
            </div>
          </div>
          <div className={`${st.act} ${st.act2}`}>
            <div className={st.con_cinta}>
              <img src={cinta} />
            </div>
            <div className={st.titulo}>
              <h3>Actividad Piloto</h3>
            </div>
            <div className={st.con_ima}>
              <img src={ima2} />
            </div>
          </div>
          <div className={`${st.act} ${st.act3}`}>
            <div className={st.con_cinta}>
              <img src={cinta} />
            </div>
            <div className={st.titulo}>
              <h3>
                Actividad <br />
                Piloto
              </h3>
            </div>
            <div className={st.con_ima}>
              <img src={ima2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
