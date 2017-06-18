
import * as React from 'react';
import {shallow} from 'enzyme';

// const Hello = require('../Hello');
import {Hello} from '../Hello'


describe('A suite', ()=>{
    it("test hello", ()=>{
        console.log('test');
        
        const wrapper = shallow(
            <Hello compiler="my compiler" framework='framework' />
        );
        
        expect(
            wrapper.contains(<h1>Hello from my compiler and framework!</h1>)
        ).toBe(true)
    });

})