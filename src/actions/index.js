
// from game.js 
export const UPDATE_GUESS = 'UPDATE_GUESS';
export const updateGuess = guess => ({
    type: UPDATE_GUESS,
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








