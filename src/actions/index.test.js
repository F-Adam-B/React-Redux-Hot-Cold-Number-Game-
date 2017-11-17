import {MAKE_GUESS, makeGuess, 
        SHOW_INFO_MODAL, showInfoModal, 
        NEW_GAME, newGame}
        from './index';

describe(makeGuess, () => {
    it('should return the action', () => {
        const guess = 3;
        const action = makeGuess(guess)
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
        
    });
});

describe(showInfoModal, () => {
    it('should return the action', () => {
        const action = showInfoModal();
        expect(action.type).toEqual(SHOW_INFO_MODAL);
    })
})

describe(newGame, () => {
    it('should return the action', () => {
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
        expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
    })
})