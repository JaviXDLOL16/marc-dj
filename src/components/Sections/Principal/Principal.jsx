import React from 'react'
 import style from "./Principal.module.css"
import Header from '../../Molecules/Head/Header'
import BodyPrincipal from '../../Molecules/BodyPrincipal/BodyPrincipal'

function Principal() {
  return (
    <>
    <div className={style.divContainer}>
    <Header></Header>
    <BodyPrincipal></BodyPrincipal>
    </div>

    </>    
  )
}

export default Principal