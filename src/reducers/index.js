import { FETCH_SERIES_BEGIN, FETCH_SERIES_SUCCESS, FETCH_SERIES_FAILURE, HOMEPAGE, PROFILE, ARCHIVE, PAGINATION } from '../constants';

const initialState = {
    pagination: HOMEPAGE,
    profile: {},
    series: {},
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_SERIES_BEGIN: {
            console.log('Start!');
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_SERIES_SUCCESS: {
            console.log('Success!');
            return {
                ...state,
                loading: false,
                series: action.payload
            };
        }
        case FETCH_SERIES_FAILURE: {
            console.log('Failure!');
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        case PAGINATION: {
            return {
                ...state,
                pagination: action.page
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;