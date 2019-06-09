import { 
    FETCH_SERIES_BEGIN,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE,
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    PAGINATION,
    PAGINATIONSECOND
} from '../constants';

export const init = () => {
    return dispatch => {
        dispatch(fetchSeriesBegin());
        return fetch('http://localhost:3000/series')
            .then(res => res.json())
            .then(json => {
                dispatch(fetchSeriesSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchSeriesFailure(error)));
    };
}


export const fetchSeriesBegin = () => ({
    type: FETCH_SERIES_BEGIN
});

export const fetchSeriesSuccess = data => ({
    type: FETCH_SERIES_SUCCESS,
    payload: data
});

export const fetchSeriesFailure = error => ({
    type: FETCH_SERIES_FAILURE,
    payload: error
});

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = (data, page, serie) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
    page,
    serie
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: error
});

export const changePage = page => ({
    type: PAGINATION,
    page
});

export const changePageSecond = page => ({
    type: PAGINATIONSECOND,
    page
});