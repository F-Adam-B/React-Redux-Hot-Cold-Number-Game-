import {NEW_GAME, MAKE_GUESS, SHOW_INFO_MODAL } from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false,
};

export const hotReducer = (state=initialState, action) => {
    
    if (action.type === NEW_GAME){
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            showInfoModal: false,
        });
        
    }

    if (action.type === MAKE_GUESS) {
       let guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            return Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });
            
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }
        state = Object.assign({}, state, {
            guesses: [...state.guesses, action.guess],
            feedback,
        })
        return state;
     }

     if (action.type === SHOW_INFO_MODAL) {
        return Object.assign({}, state, {
            showInfoModal: !state.showInfoModal,
        })
        
    }
    return state;
}

