const initialState = {
    view: 2
};

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'test': {
            console.log('Test');
            return state;
        }
        default: {
            return state;
        }
    }
};

export default reducer;