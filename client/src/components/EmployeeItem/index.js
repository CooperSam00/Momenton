import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { formatShortDate } from '../../helpers/dates'
import './styles.css'

function EmployeeItem({ employeeData, level }) {
    const {
        dateHired,
        employeeId,
        location,
        managerId,
        name,
        staff,
    } = employeeData
    const formattedShortDate = formatShortDate(dateHired)
    return (
        <Fragment>
            <li className={`employess-entry-${level}`}>
                <Link to={`/employee/${employeeId}`} className='employees-row'>
                    <div className='employees-content'>
                        <p><span className='employees-dot employees-status-green'></span>Name: {name}</p>
                        <p data-automation="employees-id">Employee ID: {employeeId}</p>
                        { managerId && <p data-automation="employees-id">Manager ID: {managerId}</p> }
                        <p data-automation="employees-date">Hired: {formattedShortDate}</p>
                        <p>Location: {location}</p>
                    </div>
                    <p className='employees-arrow'>&rarr;</p>
                </Link>
            </li>
            {staff && staff.map((employee, index) => (<EmployeeItem key={index} employeeData={employee} level={level + 1}/>)) }
        </Fragment>
    )
}

export default EmployeeItem
