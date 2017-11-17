import React from 'react';
import {TopNav} from './top-nav';
import {shallow} from 'enzyme';
import { NEW_GAME, showInfoModal, SHOW_INFO_MODAL } from '../actions';

describe ('<TopNav />', () => {
    it('should render the page', () => {
        shallow(<TopNav />)
    })

    it('should start new game', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />)
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        })
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
    });

    it('should start what', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />)
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        })
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0].type).toEqual(SHOW_INFO_MODAL);
    });

    
})