import React from 'react';
import '../App/index.css';
import faker from 'faker'
import EmployeeCard from '../EmployeeCard'
import Form from '../Form'


class App extends React.Component {
    constructor() {
        super()
        //faker.seed(123);
        //faker.locale = "ja";
        const employees = Array.from({ length: 30 }, () => ({
            name: faker.name.findName(),
            sector: faker.name.jobArea(),
            avatar: faker.image.avatar(),
            id: faker.random.uuid(),
        }))
        //NUEVO CLASE 2/3
        const sectors = employees.map(({ sector }) => sector)
        const sectorsUnrepeated = new Set(sectors)
        const sectorsArray = [...sectorsUnrepeated]

        this.state = {
            employees: employees,
            listBackup: employees,
            empleadoDelMes: null,
            employeeName: '',
            sectors: sectorsArray,
            dropdownActive: false,
            selectedSector: '',
            employeeToEdit: {},
            employeeToEditName: '',
            modalActive: false

        }
        this.handleEmpleadoMesClick = this.handleEmpleadoMesClick.bind(this) //Linea mounstrosa
        this.handleAddEmployeeSubmit = this.handleAddEmployeeSubmit.bind(this)
        this.handleAddEmployeeChange = this.handleAddEmployeeChange.bind(this)
        this.handleEditEmployee = this.handleEditEmployee.bind(this)
    }

    handleEmpleadoMesClick(employeeId) {

        //setear el estado diciendo cual es el id del empleado del mes
        this.setState({
            empleadoDelMes: employeeId
        })
        setTimeout(() => {
            console.log('state', this.state.empleadoDelMes)

        }, 1);
    }

    //NUEVO CLASE 2/3
    handleAddEmployeeChange = event => {
        const { value } = event.target
        this.setState({ employeeName: value })
    }
    //NUEVO CLASE 2/3
    handleAddEmployeeSubmit = event => {
        event.preventDefault()
        const { employees, employeeName } = this.state //Leer del estado

        const newEmployee = {
            name: employeeName,
            sector: faker.name.jobArea(),
            avatar: faker.image.avatar(),
            id: faker.random.uuid(),
        }
        const newList = [newEmployee, ...employees] //Linea importante!
        this.setState({ 
            employees: newList,
            listBackup: newList
         }) //Setear el estado
    }

    //NUEVO CLASE 2/3
    //Dropdown
    handleDropdownActive = () =>
        this.setState(prevState => ({ dropdownActive: !prevState.dropdownActive })) //Linea bardo

    //NUEVO CLASE 2/3
    handleSelectSector = sector => {
        const { listBackup } = this.state

        const listFilteredBySector = listBackup.filter(employee => employee.sector === sector)

        this.setState({
            selectedSector: sector,
            employees: listFilteredBySector,
            dropdownActive: false,
        })
    }
    //NUEVO CLASE 2/3
    handleRemoveSelectedSector = () => {
        this.setState(prevState => ({ employees: prevState.listBackup, selectedSector: '' }))
    }

    handleRemoveEmployee = id => {
        const { employees } = this.state
        const listWithoutEmployee = employees.filter(employee => employee.id !== id)
        this.setState({ employees: listWithoutEmployee, listBackup:listWithoutEmployee })

    }
    handleEditEmployee = id => {
        const { employees } = this.state
        const selectedEmployee = employees.find(employee => employee.id === id)
        this.setState({
            employeeToEdit: selectedEmployee,
            modalActive: true,
            employeeToEditName: selectedEmployee.name
        })
    }
    handleModalClose = () => {
        this.setState({ modalActive: false })
    }
    handleEmployeeEdit = (event) => {
        event.preventDefault();
        const { employeeToEdit, employees } = this.state
        const listWithoutEmployee = employees.filter(employee => employee.id !== employeeToEdit.id)
        this.setState({
            employees: [employeeToEdit, ...listWithoutEmployee],
            listBackup: [employeeToEdit, ...listWithoutEmployee],
            modalActive: false
        })


    }

    handleEditEmployeeName = (event) => {
        const { value } = event.target
        this.setState(prevState => (
            {
                employeeToEditName: value,
                employeeToEdit: { ...prevState.employeeToEdit, name: value}
            })
        )
    }

    render() {
        const {
            newEmployee,
            employees,
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

                <Form
                    handleAddEmployeeChange={this.handleAddEmployeeChange}
                    handleAddEmployeeSubmit={this.handleAddEmployeeSubmit}
                    employeeName={this.state.employeeName}
                />

                <Dropdown
                    sectors={sectors}
                    dropdownActive={dropdownActive}
                    selectedSector={selectedSector}
                    onSelectSector={this.handleSelectSector}
                    onDropdownActive={this.handleDropdownActive}
                    onRemoveSelectedSector={this.handleRemoveSelectedSector}
                />

                {modalActive && (
                    <div className='modal is-active'>
                        <div className='modal-background' />
                        <div className='modal-card'>
                            <header className='modal-card-head'>
                                <p className='modal-card-title'>Modal title</p>
                                <button className='delete' aria-label='close'
                                    onClick={this.handleModalClose}
                                />
                            </header>
                            <section className='modal-card-body'>
                                <form className='form-add-employee'
                                    onSubmit={this.handleEmployeeEdit}
                                >
                                    <input
                                        className='input'
                                        type='text'
                                        value={this.state.employeeToEditName}
                                        onChange={this.handleEditEmployeeName}
                                    />
                                    <button className='button is-success' type='submit'>
                                        Actualizar
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                )}

                {
                    employees.map((employee) =>
                        <EmployeeCard
                            employeeData={employee}
                            key={employee.id}
                            handleEmpleadoMesClick={this.handleEmpleadoMesClick}
                            empleadoDelMesID={this.state.empleadoDelMes}
                            handleRemoveEmployee={this.handleRemoveEmployee}
                            handleEditEmployee={this.handleEditEmployee}
                        />
                    )
                }
            </div>
        )
    }
}

const Dropdown = props => {

    const {
        dropdownActive,
        sectors,
        onDropdownActive,
        onSelectSector,
        selectedSector,
        onRemoveSelectedSector,
    } = props

    return (
        <div>
            <div className={`dropdown ${dropdownActive === true ? 'is-active' : ''}`}>
                <div className='dropdown-trigger'>
                    <button
                        className='button'
                        aria-haspopup='true'
                        aria-controls='dropdown-menu'
                        onClick={onDropdownActive}
                    >
                        <span>Elegir sector</span>
                        <span className='icon is-small'>
                            <i className='fas fa-angle-down' aria-hidden='true' />
                        </span>
                    </button>
                </div>
                <div className='dropdown-menu' id='dropdown-menu' role='menu'>
                    <div className='dropdown-content'>
                        {sectors.map(sector => (
                            <a
                                key={sector}
                                href='#'
                                className='dropdown-item'
                                onClick={() => onSelectSector(sector)}
                            >
                                {sector}
                            </a>
                        ))}
                    </div>
                </div>
            </div>


            {selectedSector && (
                <button
                    className='button'
                    aria-haspopup='true'
                    aria-controls='dropdown-menu'
                    onClick={onRemoveSelectedSector}
                    style={{ marginLeft: '15px' }}
                >
                    <span>{selectedSector}</span>
                    <span className='icon is-small'>
                        <i className='fas fa-trash-alt' aria-hidden='true' />
                    </span>
                </button>
            )}

        </div>
    )
}

export default App;
