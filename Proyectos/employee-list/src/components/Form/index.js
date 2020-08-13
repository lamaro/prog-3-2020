import React from 'react'

const Form = props => {

    const {
        employeeName,
        handleAddEmployeeSubmit,
        handleAddEmployeeChange
    } = props

    return (
        <form onSubmit={handleAddEmployeeSubmit} className='form-add-employee'>
            <input
                className='input'
                type='text'
                value={employeeName}
                onChange={handleAddEmployeeChange}
            />
            <button className='button is-success' type='submit'>
                Agregar Empleado
            </button>
        </form>
    )
}

export default Form

