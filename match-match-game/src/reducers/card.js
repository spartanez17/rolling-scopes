import { PICK_CARD, UPDATE_STATUS, RESTART } from '../actions'

const initialState = {
    transition: false,
    guessed: 0,
    pickedCards: [],
};

const gameProgress = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case PICK_CARD:
            nextState = {
                transition: state.transition,
                guessed: state.guessed,
                pickedCards: [...state.pickedCards],
            }
            if (nextState.pickedCards.length < 2 &&
                !state.transition) {
                nextState.pickedCards.push({
                    index: action.cardInfo.index,
                    url: action.cardInfo.url,
                    status: "picked",
                });
                nextState.transition = true;
            } else if (nextState.pickedCards.every(el => el.status === "waiting")) {
                nextState.pickedCards = [
                    {
                        index: action.cardInfo.index,
                        url: action.cardInfo.url,
                        status: "picked",
                    }
                ];
                nextState.transition = true;
            }
            return nextState;

        case UPDATE_STATUS:
            nextState = {
                transition: false,
                guessed: state.guessed,
                pickedCards: [...state.pickedCards],
            }
            if (nextState.pickedCards.length === 2) {
                if (nextState.pickedCards[0].url === nextState.pickedCards[1].url) {
                    nextState.pickedCards = [];
                    nextState.guessed += 2;
                } else {
                    nextState.pickedCards.forEach(el => { el.status = "waiting" });
                }
            }
            return nextState;
        case RESTART:
            nextState = initialState;
            initialState.pickedCards = [];
            return nextState;
        default:
            return state
    }
}

export default gameProgress;
