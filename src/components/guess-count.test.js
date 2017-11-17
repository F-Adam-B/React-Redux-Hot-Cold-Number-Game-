import React from 'react'
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('renders the count', () => {
        const value = 5;
        const wrapper = shallow(<GuessCount count={value} />);
        console.log(wrapper)
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
        
    })
})