import React from 'react';
import {GuessList} from './guess-list';

import {shallow} from 'enzyme';

describe('<GuessList />', () => {
    it('renders without crashing', () => {
        shallow(<GuessList guesses={[]} />)
    })

    it('renders guesses', () => {
        const values = [3,6,4];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        })
        
    })
})