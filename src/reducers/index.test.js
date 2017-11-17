import {hotReducer} from './index';
import {makeGuess, newGame, showInfoModal, MAKE_GUESS} from '../actions';

describe('hotReducer', () => {

    it('should set the initial state when nothing is passed in', () => {
        const state = hotReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: state.correctAnswer,
            showInfoModal: false,
        })
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = hotReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('newGame', () => {
        it('Should start a new game', () => {
            let state = {
                guesses: [1,3,6,4],
                feedback: 'You won!',
                correctAnswer: 4
            };
            state = hotReducer(state, newGame())
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                correctAnswer: state.correctAnswer,
                showInfoModal: false,
            })
        })

    })


    describe('makeGuess', () => {
        it('Should make a guess', () => {
            // Fix the correct answer so we know what we're aiming for
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 100 // Negative so different to new game
            };

            state = hotReducer(state, makeGuess(25));
            expect(state.guesses).toEqual([25]);
            expect(state.feedback).toEqual('You\'re Ice Cold...');

            state = hotReducer(state, makeGuess(60));
            expect(state.guesses).toEqual([25, 60]);
            expect(state.feedback).toEqual('You\'re Cold...');

            state = hotReducer(state, makeGuess(80));
            expect(state.guesses).toEqual([25, 60, 80]);
            expect(state.feedback).toEqual('You\'re Warm');

            state = hotReducer(state, makeGuess(95));
            expect(state.guesses).toEqual([25, 60, 80, 95]);
            expect(state.feedback).toEqual('You\'re Hot!');

            state = hotReducer(state, makeGuess(100));
            expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
            expect(state.feedback).toEqual('You got it!');
        });
    });

    describe('showInfoModal', () => {
        it('should toggle info modal on', () => {
            let state = {
                showInfoModal: false
            }
            state = hotReducer(state, showInfoModal());
            expect(state.showInfoModal).toEqual(true);
        })
        it('should toggle info modal off', () => {
            let state = {
                showInfoModal: true
            }
            state= hotReducer(state, showInfoModal());
            expect(state.showInfoModal).toEqual(false);
        })
    })

})