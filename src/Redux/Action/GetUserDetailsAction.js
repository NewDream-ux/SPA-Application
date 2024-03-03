import { USER_DETAILS, FAVOURITE_LIST, REMOVE_FAVOURITE_LIST } from "../ReduxConstant";

export const getUserDetails = () => {
    return { type: USER_DETAILS }
}

export const favouriteData = (data) => {
    return { type: FAVOURITE_LIST, data }
}