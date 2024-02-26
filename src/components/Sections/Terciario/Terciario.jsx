import React from 'react';
import styles from "./Terciario.module.css";
import Fondo from "../../../assets/imgs/DjBlue.jpg";

function Terciario() {
  return (
    <div>
      <img className={styles.conFondo} src={Fondo}  />
      <div className={styles.conText} >
        <div className={styles.contData}>
          <div className={styles.contTitle}>
            <b>¿Qué esperas para contratarnos?</b>
          </div>
          <div className={styles.contSubtitle}>
            <p>Recuerda agendar con días de antelación. Las tarifas pueden variar según la fecha.</p>
          </div>
          <input className={styles.input} type="text" placeholder="Agende su cita" />
          <input className={styles.input} type="text" placeholder="Lugar" />
          <button>Agenda tu cita</button>
        </div>
      </div>
    </div>
  )
}

export default Terciario;
