import React from 'react';
import {InfoModal} from './info-modal';
import {shallow, mount} from 'enzyme';
import {showInfoModal} from '../actions';

describe('<InfoModal />', () => {
    it('should render the page' , () => {
        shallow('<InfoModal />')
    })
    
    it('should closeout of infomodal', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<InfoModal dispatch={dispatch} />)
        wrapper.find('.close').simulate('click', {preventDefault() {}
    })
       expect(dispatch).toHaveBeenCalled();
       expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    })
})