import React from 'react';
import '../App/index.css';
import faker from 'faker'
import EmployeeCard from '../EmployeeCard'

class App extends React.Component {
    constructor() {
        super()
        //faker.seed(123);
        faker.locale = "ja";
        const employees = Array.from({ length: 30 }, () => ({
            name: faker.name.findName(),
            sector: faker.name.jobArea(),
            avatar: faker.image.avatar(),
            id: faker.random.uuid(),
        }))
        console.log(employees)
        // const sectors = employees.map(({ sector }) => sector)
        // const sectorsUnrepeated = new Set(sectors)
        // const sectorsArray = [...sectorsUnrepeated]

        this.state = {
            employees: employees,
            listBackup: employees,
            empleadoDelMes: null
        }
        this.handleEmpleadoMesClick = this.handleEmpleadoMesClick.bind(this) //Linea mounstrosa
    }

    handleEmpleadoMesClick(employeeId){
       
        //setear el estado diciendo cual es el id del empleado del mes
        this.setState({
            empleadoDelMes:employeeId
        })
        console.log('parametro',employeeId)
        setTimeout(() => {
            console.log('state',this.state.empleadoDelMes)
            
        }, 1);
    }

    render() {
        const {
            newEmployee,
            list,
            idMonthEmployee,
            dropdownActive,
            sectors,
            selectedSector,
            modalActive,
            employeeToEdit,
        } = this.state

        return (
            <div className='container'>
                <h1 className='is-size-1'>Lista de Empleados</h1>

                <form className='form-add-employee'>
                    <input
                        className='input'
                        type='text'
                        value={newEmployee}
                        onChange={this.handleAddEmployeeChange}
                    />
                    <button className='button is-success' type='submit'>
                        Agregar Empleado
            </button>
                </form>

                <Dropdown />

                {modalActive && (
                    <div className='modal is-active'>
                        <div className='modal-background' />
                        <div className='modal-card'>
                            <header className='modal-card-head'>
                                <p className='modal-card-title'>Modal title</p>
                                <button className='delete' aria-label='close' />
                            </header>
                            <section className='modal-card-body'>
                                <form className='form-add-employee'>
                                    <input
                                        className='input'
                                        type='text'
                                    />
                                </form>
                            </section>
                        </div>
                    </div>
                )}

                {
                    this.state.employees.map((employee) =>
                        <EmployeeCard 
                        employeeData={employee} 
                        key={employee.id} 
                        handleEmpleadoMesClick={this.handleEmpleadoMesClick} 
                        empleadoDelMesID = {this.state.empleadoDelMes}
                        />
                    )
                }
            </div>
        )
    }
}

const Dropdown = props => {

    const dropdownActive = false;
    return (
        <div>
            <div className={`dropdown ${dropdownActive === true ? 'is-active' : ''}`}>
                <div className='dropdown-trigger'>
                    <button
                        className='button'
                        aria-haspopup='true'
                        aria-controls='dropdown-menu'
                    >
                        <span>Elegir sector</span>
                        <span className='icon is-small'>
                            <i className='fas fa-angle-down' aria-hidden='true' />
                        </span>
                    </button>
                </div>
                <div className='dropdown-menu' id='dropdown-menu' role='menu'>
                    <div className='dropdown-content'>

                    </div>
                </div>
            </div>


            <button
                className='button'
                aria-haspopup='true'
                aria-controls='dropdown-menu'
                style={{ marginLeft: '15px' }}
            >
                <span>sector elegido</span>
                <span className='icon is-small'>
                    <i className='fas fa-trash-alt' aria-hidden='true' />
                </span>
            </button>

        </div>
    )
}

export default App;
