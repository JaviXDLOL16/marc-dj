import React from 'react'
import style from "./Secundaria.module.css"
import CardsBody from '../../Molecules/CardsBody/CardsBody'
function Secundaria() {
  return (
   <>
   <div className={style.divContainer}>
   <h2>Servicios que ofrecemos:</h2>
    <CardsBody></CardsBody>
   </div>

   </>
  )
}

export default Secundaria