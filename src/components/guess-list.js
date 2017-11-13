import React from 'react';

import './guess-list.css';

export default class GuessList extends React.Component {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));
    render() {
    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
}
};
