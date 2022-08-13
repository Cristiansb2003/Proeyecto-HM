import st from "./Slideshow.module.css";

import img1 from "./../../../utils/actividad-piloto/1.jpg";
import img2 from "./../../../utils/actividad-piloto/2.jpg";
import img3 from "./../../../utils/actividad-piloto/3.jpg";
import img4 from "./../../../utils/actividad-piloto/4.jpg";
import Fizquierda from "./../../../utils/izquierda.svg";
import FiDerecha from "./../../../utils/derecha.svg";
import styled from "styled-components";
export function Slideshow() {
  return (
    <ContenedorPrincipal>
      <div>
        <div className={st.contenedorSlideShow}>
          <div className={st.slide}>
            <div className={st.contenedorImagen}>
              <img src={img2} />
            </div>
            <div>
              <p className={st.descrip}>Actividad Piloto</p>
            </div>
          </div>
          <div className={st.slide}>
            <div className={st.contenedorImagen}>
              <img src={img2} />
            </div>
            <div>
              <p className={st.descrip}>Actividad Piloto</p>
            </div>
          </div>
          <div className={st.slide}>
            <div className={st.contenedorImagen}>
              <img src={img3} />
            </div>
            <div>
              <p className={st.descrip}>Actividad Piloto</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>
          <img src={Fizquierda} />
        </button>
        <button>
          <img src={FiDerecha} />
        </button>
      </div>
    </ContenedorPrincipal>
  );
}

const ContenedorPrincipal = styled.div``;
