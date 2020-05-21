import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App Component', () => {
    const wrapper = shallow(<App />)
    test('Should render body when component is mounted', () => {
        expect(wrapper.find('[data-automation="body"]').exists()).toBeTruthy()
    })
})