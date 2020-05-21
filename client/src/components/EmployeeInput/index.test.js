import React from 'react'
import EmployeeInput from './'
import { shallow } from 'enzyme'

describe('Employee Input Component', () => {
    test('Should not render error when component is mounted', () => {
        const wrapper = shallow(<EmployeeInput />)
        expect(wrapper.find('[data-automation="employee-error"]').exists()).toBeFalsy()
    })
    test('Should not render error when component is mounted and legal character is added to input', () => {
        const wrapper = shallow(<EmployeeInput />)
        wrapper.find('[data-automation="search-input"]').simulate('change', { target: { value: '222' } });
        expect(wrapper.find('[data-automation="search-error"]').exists()).toBeFalsy()
    })
    test('Should render error when component is mounted and illegal character is added to input', () => {
        const wrapper = shallow(<EmployeeInput />)
        wrapper.find('[data-automation="search-input"]').simulate('change', { target: { value: '@' } });
        expect(wrapper.find('[data-automation="search-error"]').exists()).toBeTruthy()
    })
    test('Should render error when component is mounted and text character is added to input', () => {
        const wrapper = shallow(<EmployeeInput />)
        wrapper.find('[data-automation="search-input"]').simulate('change', { target: { value: '2s' } });
        expect(wrapper.find('[data-automation="search-error"]').exists()).toBeTruthy()
    })
})