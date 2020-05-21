import React from 'react'
import EmployeeItem from './'
import { shallow } from 'enzyme'

describe('Employee Item Component', () => {
    const fakeProps = {
        name: 'Martin',
        employeeId: '220',
        managerId: '100',
        dateHired: '2018-11-12T03:34:23+00:00',
        location: 'Melbourne'
    }
    test('Should render fields when component is mounted', () => {
        const wrapper = shallow(<EmployeeItem employeeData={fakeProps}/>)
        expect(wrapper.find('[data-automation="employees-id"]').exists()).toBeTruthy()
        expect(wrapper.find('[data-automation="employees-date"]').exists()).toBeTruthy()
    })
})