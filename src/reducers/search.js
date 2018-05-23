const initialState = [];

export default function search(state = initialState, action) {
    if (action.type === 'FIND_COLOR') {
        console.log([...state, action.payload]);
        return [...state, action.payload];
    }
    return state;
}

