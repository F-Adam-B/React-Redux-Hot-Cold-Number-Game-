import React from 'react';
import InfoModal from './info-modal';
import {Header} from './header'
import {shallow, mount} from 'enzyme'
import { showInfoModal } from '../actions/index';

describe('<Header />', () => {
    it('should render the page', () => {
        shallow(<Header />)
    })

    it('should not render infomodal when false', () => {
        const wrapper = shallow(<Header showInfoModal={false} />)
        expect(wrapper.find(InfoModal).exists()).toEqual(false)
    })

    it('should render infomodal when true', () => {
        const wrapper = shallow(<Header showInfoModal={true} />)
        expect(wrapper.find(InfoModal).exists()).toEqual(true);
    })
})