const employeeData = require('../test-data/employees')

const attachStaffDetails = (filteredEmployee, employees) => {
    let currentStaff = employees.filter(employee => {
        return filteredEmployee['employeeId'] === employee['managerId']
    })
    filteredEmployee.staff = currentStaff
    return filteredEmployee
}

const filterEmployeeData = (employeeId) => {
    const employeeDataArray = [...employeeData]
    const employeeIdArray = employeeId.split(',')
    let filteredEmployeeData = employeeDataArray.filter(employee => {
        return (employeeIdArray.includes(employee['employeeId'].toString()))
    })
    filteredEmployeeData.forEach(filteredEmployee => {
        filteredEmployee.manager = []
        filteredEmployee.staff = []
        attachStaffDetails(filteredEmployee, employeeDataArray)
    })
    return filteredEmployeeData
}

const recursiveFormatEmployees = (employees, managerId = null) => {
    const formattedData = []
    for (let index in employees) {
        if (employees[index].managerId === managerId) {
            let staff = recursiveFormatEmployees(employees, employees[index].employeeId)
            if (staff.length) {
                employees[index].staff = staff
            }
            formattedData.push(employees[index])
        }
    }
    return formattedData
}

module.exports = () => {
    return {
        allEmployeeData: (req, res) => {
            const employeeDataArray = [...employeeData]
            res.send({ employees: recursiveFormatEmployees(employeeDataArray) })
        },
        individualEmployeeData: (req, res) => {
            const { employeeId } = req.query
            const individualEmployeeData = filterEmployeeData(employeeId)
            if (individualEmployeeData) {
                res.send(individualEmployeeData)
            } else {
                res.sendStatus(404)
            }
        },
        attachStaffDetails,
        filterEmployeeData,
        recursiveFormatEmployees,
    }
}
