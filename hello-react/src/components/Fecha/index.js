import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand

const Fecha = ( props ) => {
    const diaDeHoy = dayjs(Date()).locale('es').format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')
    
    //const { texto, fecha } = props
    return(
        <p>{ diaDeHoy }</p>
    )
}

export default Fecha;