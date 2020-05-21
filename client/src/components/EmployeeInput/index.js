import React, { useState } from 'react'
import { submitEmployeeRequest, validateSearchInput } from '../../helpers/search'
import './styles.css'

function EmployeeInput({ setEmployeeList }) {
    const [errorState, setErrorState] = useState(null)
    const [userInput, setUserInput] = useState('');

    const handleOnChange = (input) => {
        setErrorState(!validateSearchInput(input))
        setUserInput(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errorState && !userInput) {
            setEmployeeList([])
        }
        if (!errorState && userInput) {
            submitEmployeeRequest(userInput).then( data => {
                setEmployeeList(data)
            })
        }
    }
    
    return (
        <div className='search-main'>
            <div className='search-content'>
                <h2 className='search-header'>Search an Employee</h2>
                <p className='search-text'>Hint: you can enter search up to 10 employee ids, separated by spaces or commas</p>
            </div>
            <form onSubmit={handleSubmit} className='search-form'>
                <input
                    data-automation='search-input'
                    className='search-input'
                    type="text"
                    placeholder="Enter employee id(s) here"
                    value={userInput}
                    onChange={e => handleOnChange(e.target.value)}
                ></input>
                <input
                    type="submit"
                    value="Track"
                    className='search-button'
                ></input>
            </form>
            { errorState &&
                <div
                    data-automation='search-error'
                    className='search-error'
                >
                    <p>Something's not quite right. Please check that your employee ids contain only numerals (0-9)</p>
                </div>
            }
        </div>
    )
}

export default EmployeeInput
