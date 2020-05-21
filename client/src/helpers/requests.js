export const requestAllEmployeeData = async () => {
    const response = await fetch('/api/employees');
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
};

export const requestEmployeeData = async (employeeId) => {
    const response = await fetch(`/api/employee?employeeId=${employeeId}`);
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
};