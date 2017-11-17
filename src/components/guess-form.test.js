import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import { makeGuess } from '../actions'

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />)
    })

    it('should reset the form when submitted', () => {
        
        const wrapper = mount(<GuessForm dispatch={ac => 0} />)
        const input = wrapper.find('input[type="text"]')
        input.instance().value = 10;
        wrapper.simulate('submit')
        expect(input.instance().value).toEqual('')
    })

    it('dispatches makeGuess from makeGuess', () => {
        const dispatch = jest.fn();
        const value = '3';
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit')
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
        
    })
})

