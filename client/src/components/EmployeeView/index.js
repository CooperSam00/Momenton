import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from "react-router-dom"
import { submitEmployeeRequest } from '../../helpers/search'
import { formatLongDate } from '../../helpers/dates'
import './styles.css'

function EmployeeView() {
  const [currentEmployee, setCurrentEmployee] = useState({})

  const match = useRouteMatch();
  const employeeRequestedId = match.params.employeeId

  useEffect(() => {
    submitEmployeeRequest(employeeRequestedId).then(data => {
      setCurrentEmployee(data[0])
    })
  }, [employeeRequestedId])

  const {
    dateHired,
    employeeId,
    location,
    managerId,
    name,
    staff,
  } = currentEmployee

  return (
    <div className='employee-wrapper' data-automation='employee-wrapper'>
      <Link className='employee-link' to="/">&larr; Return</Link>
      <div className='employee-container'>
        <h2 data-automation='employee-name' className='employee-header'>Name: {name}</h2>
        <h3>Employee ID: {employeeId}</h3>
        {managerId && <Link to={`/employee/${managerId}`}><h3>Manager ID: {managerId}</h3></Link>}
        <ul className='employee-list'>
          <li>Office Location: {location}</li>
          <li>Hired: {formatLongDate(dateHired)}</li>
          {staff && staff.length > 0 && <li>Team Members: </li>}
          {staff && staff.map(staffObject => (
            <Link to={`/employee/${staffObject.employeeId}`} className='employees-row'>
              <p data-automation={staffObject.name}><b>Staff Name:</b> {staffObject.name} &nbsp;</p>
              <p data-automation={staffObject.employeeId}><b>Staff ID:</b> {staffObject.employeeId}</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EmployeeView
