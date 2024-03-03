import { SET_FAVOURITE_LIST } from "../ReduxConstant"
const FavDetailReducer = (initialSata = [], action) => {
    switch (action?.type) {
        case SET_FAVOURITE_LIST:
            return [...initialSata, action.data]
        default:
            return initialSata
    }
}

export default FavDetailReducer
