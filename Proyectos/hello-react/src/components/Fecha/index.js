import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand

const Fecha = ( {fecha} ) => {
    const diaDeHoy = dayjs(fecha).locale('es').format('DD/MM/YYYY')
    
    //const { texto, fecha } = props
    return(
        <p>{ diaDeHoy }</p>
    )
}

export default Fecha;