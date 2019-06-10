import {
    FETCH_SERIES_BEGIN,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE,
    GOSILA,
    PAGINATION,
    PAGINATIONSECOND,
    FETCH_DATA_BEGIN,
    FETCH_SERIE_SUCCESS,
    FETCH_DATA_FAILURE, } from '../constants';

const initialState = {
    pagination: GOSILA,
    paginationSecond: 'FAHRERWERTUNG',
    series: undefined,
    serie: undefined,
    calendar: undefined,
    standings: {
        driver: undefined,
        team: undefined
    },
    result: undefined,
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
                pagination: action.page,
                paginationSecond: 'FAHRERWERTUNG',
                leftNav: action.back,
                rightNav: action.next
            };
        }
        case PAGINATIONSECOND: {
            return {
                ...state,
                paginationSecond: action.page
            };
        }
        case FETCH_DATA_BEGIN: {
            console.log('Start!');
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_SERIE_SUCCESS: {
            console.log('Success!');
            console.log(action);
            return {
                ...state,
                loading: false,
                pagination: action.page,
                calendar: action.payload[0],
                standings: {
                    driver: action.payload[1],
                    team: action.payload[2]
                }
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