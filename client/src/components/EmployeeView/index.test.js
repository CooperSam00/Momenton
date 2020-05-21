import React from 'react'
import EmployeeView from './'
import { shallow } from 'enzyme'

jest.mock('react-router-dom', () => {
    const mockObject = {
        params: { employeeId: 220 }
    }
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useRouteMatch: jest.fn().mockReturnValueOnce(mockObject),
    }
})

describe('Employee Item Component', () => {
    test('Should render fields when component is mounted', () => {
        const wrapper = shallow(<EmployeeView />)
        expect(wrapper.find('[data-automation="employee-wrapper"]').exists()).toBeTruthy()
        expect(wrapper.find('[data-automation="employee-name"]').exists()).toBeTruthy()
    })
})