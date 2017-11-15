import React from 'react';
import { connect } from 'react-redux'

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';



export class Game extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <GuessSection />
                <GuessCount />
                <GuessList />
            </div>
        );
    }
}

// 
export default connect()(Game);

// Specify how state is converted to props in mapStateToProps
// It takes the current state from the store, and returns the 
// data the component will need

// const mapStateToProps = (state, props) => {
    // return props.expected item to return
    // value here is the value used
// }


// first call make a generic call, the second is the specific location
// designed to make chain up better, but that's why it looks wierd
// need to connect() components where you need to get info from the state or modifying the state

