import React, {
  useEffect,
  useState
} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { requestAllEmployeeData } from './helpers/requests'
import EmployeeItem from './components/EmployeeItem'
import EmployeeView from './components/EmployeeView'
import EmployeeInput from './components/EmployeeInput'
import './styles.css'

function App() {
  const [employeeList, setEmployeeList] = useState(null)

  useEffect(() => {
    requestAllEmployeeData()
    .then(res => {
      setEmployeeList(res.employees)
    })
  }, [])

  return (
    <Router>
      <div className="body" data-automation="body">
        <header className="header">
          <h1 className="title">Momenton Employee Tracker</h1>
        </header>
        <EmployeeInput setEmployeeList={setEmployeeList}/>
        <div className="wrapper">
          <Switch>
            <Route path="/employee/:employeeId">
              <EmployeeView />
            </Route>
            <Route path="/">
              <ul className="employee-list">
                {employeeList && employeeList.map(employee => (
                  <EmployeeItem key={employee.employeeId} employeeData={employee} level={1}/>
                ))}
              </ul>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
