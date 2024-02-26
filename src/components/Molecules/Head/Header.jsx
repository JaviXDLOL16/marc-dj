import React from 'react'
import style from "./Header.module.css"
import img1 from "../../../assets/imgs/LogoEmpresa2.png"
function Header() {
    return (
        <div className={style.divContainer}>
            <div className={style.divUp}>
                <div className={style.divLocacion}>
                    <div><ion-icon name="location-outline"></ion-icon></div>

                    <div className={style.pLocation}>
                        <p>Locacion:</p>
                        <p>Tuxtla Gutierrez,Chiapas,Mexico</p>

                    </div>

                </div>

                <div className={style.divHorario}>
                    <ion-icon name="time-outline"></ion-icon>
                    <div className={style.divHorario}>
                        <div className={style.pHorario}>
                            <p>Horario:</p>
                            <p>8:00 a 17:00 Lunes a Sabados</p>
                        </div>

                    </div>
                </div>
                <div className={style.divTelefono}>
                    <ion-icon name="call-outline"></ion-icon>
                    <div>
                        <p>+52 961 172 7185</p>
                        <p>+52 961 172 7185</p>
                    </div>

                </div>
            </div>
            <div className={style.divDown}>

                <div className={style.divLeft}>
                    <img src={img1} alt="" className={style.logoEmpresa}/>
                </div>
                <div className={style.divMiddle}>
                    <p>Servicios</p>
                    <p>Conocenos</p>
                    <p>Ayuda</p>
                    <p>Trabajos</p>

                </div>
                <div className={style.divRight}>

                 <button className={style.buttonHeader}>Iniciar Sesión</button>
                </div>

            </div>

        </div>
    )
}

export default Header