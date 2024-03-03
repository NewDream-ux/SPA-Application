import { SET_USER_DETAILS } from "../ReduxConstant"
const UserDetailReducer = (initialData = [], action) => {
    switch (action?.type) {
        case SET_USER_DETAILS:
            return action.data
        default:
            return initialData
    }
}

export default UserDetailReducer
