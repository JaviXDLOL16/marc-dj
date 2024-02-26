import React from 'react'
import style from "./Card.module.css"
import img from "../../../assets/imgs/LogoEmpresa2.png"
function Card(props) {
  return (
    <div className={style.divContainer}>
        <div className={style.divImagen}>
        <img src={props.imagen} alt="" className={style.logo} />

        </div>

        <div className={style.loque}>
        <h3>{props.titulo}</h3>
        <div className={style.divGenerado}>
        <p>{props.contenido}</p>
        </div>
        </div>
      
      

    </div>
  )
}

export default Card