import React from 'react';
import {TopNav} from './top-nav';
import {shallow} from 'enzyme';
import { NEW_GAME, showInfoModal } from '../actions';

describe ('<TopNav />', () => {
    it('should render the page', () => {
        shallow(<TopNav />)
    })
})