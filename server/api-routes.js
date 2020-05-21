const EmployeeAPI = require('./controllers/employees')()

module.exports = (app) => {
    app.get('/api/employees', EmployeeAPI.allEmployeeData)
    app.get('/api/employee', EmployeeAPI.individualEmployeeData)
}