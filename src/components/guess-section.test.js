import React from 'react';
import {GuessSection} from './guess-section';
import {GuessForm} from './guess-form'
import {shallow, mount} from 'enzyme'

describe('<GuessSection', () => {
    it('should render the page', () => {
        shallow(<GuessSection />)
    })

    it('should render feedback', () => {
        const feedback = 'Por Ejemplo';
        const  wrapper = shallow(<GuessSection feedback={feedback}/>)
        expect(wrapper.contains(feedback)).toEqual(true)
    })
})