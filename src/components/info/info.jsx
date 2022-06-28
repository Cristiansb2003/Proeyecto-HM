import React from "react";
import style from "./info.module.css";

export function Info() {
  return (
    <div className= {style.sec2}>
      <div className={style.con_trian2}>
        <div className={style.trian2}></div>
      </div>
      <div className={style.con_trian3}>
        <div className={style.trian3}></div>
      </div>
      <div className={style.centro}>
        <div className={style.contenedor}>
          <div className={style.izq}>
            <div className={style.l1}></div>
            <div className={style.l2}></div>
          </div>
          <div className={style.sup}>
            <div className={style.l1}></div>
            <div className={style.l2}></div>
          </div>
          <div className={style.tex}>
            <p>Hola como estan</p>
          </div>
          <div className={style.der}>
            <div className={style.l1}></div>
            <div className={style.l2}></div>
          </div>
          <div className={style.inf}>
            <div className={style.l1}></div>
            <div className={style.l2}></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
