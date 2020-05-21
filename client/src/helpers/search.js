import { requestEmployeeData } from './requests'

export const validateSearchInput = (userInput) => {
    return !(/[^0-9 ,]/g.test(userInput))
}

export const createSearchRequestParam = (userInput) => {
    return userInput.replace(/ +/g, ',')
}

export const submitEmployeeRequest = (searchSubmission) => {
    const formattedQuery = createSearchRequestParam(searchSubmission)
    return requestEmployeeData(formattedQuery)
}