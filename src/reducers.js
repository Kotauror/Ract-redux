export default (state, action) => {
    if (action.type === "SET_NAME") {
        return {...state, name: action.payload}
    } else {
        return state
    }
}