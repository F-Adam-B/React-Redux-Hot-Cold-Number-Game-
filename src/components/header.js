import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';
import { showInfoModal } from '../actions'
import { connect } from 'react-redux'

export function Header (props) {
    
    // toggleInfoModal() {
    //     this.props.dispatch(showInfoModal())
    // }

        let infoModal;
        if (props.showInfoModal) {
            infoModal = <InfoModal onClose={() => props.dispatch(showInfoModal())} />;
        }

        return (
            <header>
                <TopNav />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    
};

export const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer,
    showInfoModal: state.showInfoModal,
})
export default connect(mapStateToProps)(Header)
