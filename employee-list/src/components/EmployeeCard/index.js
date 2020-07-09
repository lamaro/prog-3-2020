import React from 'react';
import Avatar from '../Avatar'
import BtnEmpleadoDelMes from '../BtnEmpleadoDelMes';

const EmployeeCard = props => {
    const {
        employeeData,
        handleEmpleadoMesClick,
        empleadoDelMesID,
        handleRemoveEmployee
    } = props

    const {name, sector, id, avatar} = employeeData
    const isMonthEmployee = empleadoDelMesID === id

    return (
        <div className={`employee-card ${isMonthEmployee ? 'bg-yellow' : ''}`}>
            <Avatar imageSrc={avatar}/>

            <div>
                <h2 className='is-size-3'>{name}</h2>
                <h3 className='is-family-monospace'>{sector}</h3>
            </div>

            <button className='button is-primary'>
                <span className='icon is-small'>
                    <i className='fas fa-edit' />
                </span>
                <span>Editar</span>
            </button>


            <button
                className='button is-danger is-outlined'
                onClick = { () => handleRemoveEmployee(id) }
            >
                <span className='icon is-small'>
                    <i className='fas fa-times' />
                </span>
                <span>Eliminar</span>
            </button>
            {!isMonthEmployee && 
                <BtnEmpleadoDelMes employeeId={id} handleEmpleadoMesClick={handleEmpleadoMesClick}/>
            }
        </div>
    )
}

export default EmployeeCard