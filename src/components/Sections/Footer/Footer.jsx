import styles from "./Footer.module.css"
import Logo from "../../../assets/imgs/LogoEmpresa2.png";

function Footer() {
  return (
<div className={styles.contall}>
<div className={styles.contFooter}>
        <div className={styles.contTop}>
            <div className={styles.contHours}>
                <div className={styles.contWait}>
                <img className={styles.logoImage} src={Logo}  />
                <p>Agenda tu cita lo antes posible</p>
                </div>
                <div className={styles.contOpen}>
                <b>Horarios</b>
            <div className={styles.Hours}>
            <div>
                 <p>De lunes a viernes</p>
                 <p>8:00 am a 6:00 am</p>   
                </div>
                <div>
                 <p>Sabado</p>
                 <p>8:00 am a 6:00 am</p>   
                </div>
                <div>
                 <p>Domingo</p>
                 <p>Cerrado</p>   
                </div>
            </div>
                </div>
            </div>
            <div className={styles.contNavigation}>
            <b>Contactos</b>
            <p>+52 961 137 2488</p>
            <p>mauricioacp34@gmail.com</p>
            </div>
            <div className={styles.contCourses}>
            <b>Redes sociales</b>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            </div>
        </div>
        <div className={styles.contBottom}>
        
        <p>2022 Restaurants. All Right Reserved. Designed by Javier</p>
        <p>Terminos y servicios</p>
        <p>Politicas y privacidad</p>
        </div>
    </div>
</div>

  )
}

export default Footer