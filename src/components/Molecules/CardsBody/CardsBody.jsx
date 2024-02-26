import React from 'react'
import style from "./CardsBody.module.css"
import Card from '../../Atoms/Card/Card'

import img from "../../../assets/imgs/LogoEmpresa2.png"
import img2 from "../../../assets/imgs/mau.png"
import img4 from "../../../assets/imgs/Mau100.png"
import img3 from "../../../assets/imgs/mauEquipo.png"
function CardsBody() {
  return (
        <>
        <div className={style.divCards}>
        <Card
        titulo="Mentorías DJ con musica Kabrona"
        contenido="Ofrecemos sesiones de mentoría personalizadas con DJs experimentados para ayudarte a perfeccionar tus habilidades y alcanzar tus metas en el mundo de la música."
        imagen={img2}
      />
      <Card
        titulo="Servicios DJ te van hacer irte o venirte"
        contenido="Explora una amplia gama de servicios DJ que ofrecemos, desde eventos en vivo hasta mezclas personalizadas. Hacemos que cada ocasión sea única con la mejor selección musical."
        imagen={img4}
      />
      <Card
        titulo="Equipamiento Profesional +18"
        contenido="Contamos con el mejor equipamiento DJ disponible en el mercado. Desde controladores hasta sistemas de sonido de alta calidad, proporcionamos las herramientas que necesitas para destacar en tu carrera."
        imagen={img3}
      />
      <Card
        titulo="Eventos Especiales: 1:30 hrs como maximo (El Dj Mau se Encuera)"
        contenido="Organizamos eventos especiales que van más allá de la música. Desde fiestas temáticas hasta colaboraciones exclusivas, creamos experiencias memorables para todos nuestros clientes."
        imagen={img2}
      />
        </div>
        </>
    )
}

export default CardsBody