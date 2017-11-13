
// from game.js 
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
})
// from game.js
export const NEW_GAME = 'NEW_GAME';
export const newGame = game => ({
    type: NEW_GAME,
    game
})

// from header.js
export const SHOW_INFO_MODEL = 'SHOW_INFO_MODEL';
export const showInfoModal = modal => ({
    type: SHOW_INFO_MODEL,
    modal
})








