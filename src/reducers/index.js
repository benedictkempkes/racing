import {
    FETCH_SERIES_BEGIN,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE,
    HOMEPAGE,
    PAGINATION,
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE, } from '../constants';

const initialState = {
    pagination: HOMEPAGE,
    profile: undefined,
    series: undefined,
    serie: undefined,
    data: undefined,
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
        case FETCH_DATA_BEGIN: {
            console.log('Start!');
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_DATA_SUCCESS: {
            console.log('Success!');
            return {
                ...state,
                loading: false,
                data: action.payload,
                pagination: action.page,
                serie: action.serie
            };
        }
        case FETCH_DATA_FAILURE: {
            console.log('Failure!');
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;