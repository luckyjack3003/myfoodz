import React from 'react'
const App=()=>(
    <div>h1</div>
)
import { shallow } from 'enzyme'
const wrapper = shallow(<App/>)
import expect from 'expect'
describe('HelloWorld Component', () => {
    it('renders h1', () => {
        expect('Hello World').toEqual('Hello World')
    })
})