import { FETCH_SERIES_BEGIN, FETCH_SERIES_SUCCESS, FETCH_SERIES_FAILURE } from '../constants';

const initialState = {
    view: 0,
    profile: {},
    series: {},
    loading: false
};

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case FETCH_SERIES_BEGIN: {
            console.log('INIT!');
            return state;
        }
        default: {
            return state;
        }
    }
};

export default reducer;