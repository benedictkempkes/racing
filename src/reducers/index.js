import {
    FETCH_SERIES_BEGIN,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE,
    GOSILA,
    PAGINATION,
    PAGINATIONSECOND,
    TOGGLEMENU,
    FETCH_DATA_BEGIN,
    FETCH_SERIE_SUCCESS,
    FETCH_RESULT_SUCCESS,
    FETCH_DATA_FAILURE, } from '../constants';

const initialState = {
    pagination: GOSILA,
    paginationSecond: 'FAHRERWERTUNG',
    menu: false,
    series: undefined,
    serie: undefined,
    calendar: undefined,
    standings: {
        driver: undefined,
        team: undefined
    },
    result: undefined,
    race: undefined,
    data: undefined,
    loading: true,
    error: undefined
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
                error: action.payload
            };
        }
        case PAGINATION: {
            return {
                ...state,
                loading: false,
                pagination: action.page,
                paginationSecond: 'FAHRERWERTUNG',
                menu: false,
                leftNav: action.back,
                rightNav: action.next
            };
        }
        case PAGINATIONSECOND: {
            return {
                ...state,
                paginationSecond: action.page,
                menu: false
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
            return {
                ...state,
                loading: false,
                pagination: action.page,
                menu: false,
                serie: action.serie,
                race: undefined,
                calendar: action.payload[0],
                standings: {
                    driver: action.payload[1],
                    team: action.payload[2]
                }
            };
        }
        case FETCH_RESULT_SUCCESS: {
            console.log('Success!');
            return {
                ...state,
                loading: false,
                pagination: action.page,
                menu: false,
                race: action.race,
                place: action.place,
                result: action.payload
            };
        }
        case FETCH_DATA_FAILURE: {
            console.log('Failure!');
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }
        case TOGGLEMENU: {
            return {
                ...state,
                menu: action.value
            }
        }
        default: {
            return state;
        }
    }
};

export default reducer;