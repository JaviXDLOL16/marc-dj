import React from 'react'
import style from "./BodyPrincipal.module.css"
import img from "../../../assets/imgs/Roboto.png"
function BodyPrincipal() {
    return (
        <>
        <div className={style.divContainer}>
            <div className={style.divIzquierdo}>
               <h1 >Marc Audio | Video | Iluminacion</h1> 
               <p>Con el mejor DJ de chiapas, DJ MAUWU con 21 años de experiencia brindando sonido, iluminación y calidad a tus eventos. Agenda tu reservación ahora mismo.</p>
               <button>Contacto</button>

            </div>
            <div className={style.divDerecho}>
            <img src={img} alt="" className={style.roboto}/>
            </div>
        </div>

        </>

    )
}

export default BodyPrincipal