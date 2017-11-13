import {NEW_GAME, MAKE_GUESS, SHOW_INFO_MODAL } from '../actions';


const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false,
};

export const newGame = (state=initialState, action) => {
    if (action.type === NEW_GAME){
        return Object.assign({}, state, {
            correctAnswer: action.correctAnswer,
        });
    }
    return state;
}

export const makeGuess = (state=initialState, action) => {
    // if (action.type === MAKE_GUESS) {
    //     return Object.assign({}, state, {
    //         guesses: action.guesses, 
    //         feedback: action.feedback,
    //     })
    //  }
        switch(action.type) {
            case 'MAKE_GUESS':
            return {
                guesses: action.guesses,
                feedback: action.feedback,
            }
        }
    return state;
}

export const showInfoModal = (state=initialState, action) => {
    if (action.type === SHOW_INFO_MODAL) {
        
    }
    return state;
}