import { FETCH_SERIES_BEGIN, FETCH_SERIES_SUCCESS, FETCH_SERIES_FAILURE, HOMEPAGE, PROFILE, ARCHIVE, PAGINATION } from '../constants';

const initialState = {
    pagination: HOMEPAGE,
    profile: {},
    series: {},
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
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
                profile: action.payload.profile,
                series: action.payload.series
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