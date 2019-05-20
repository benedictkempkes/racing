import { FETCH_SERIES_BEGIN, FETCH_SERIES_SUCCESS, FETCH_SERIES_FAILURE} from '../constants';

export const init = () => {
    return dispatch => {
        return fetch('http://localhost:3000/series')
            .then(res => res.json())
            .then(json => {
                dispatch(fetchSeriesSuccess(json));
                console.log(json);
                return json;
            })
            .catch(error => dispatch(fetchSeriesFailure(error)));
    };
}

export const fetchSeriesBegin = () => ({
    type: FETCH_SERIES_BEGIN
});

export const fetchSeriesSuccess = series => ({
    type: FETCH_SERIES_SUCCESS,
    payload: {series}
});

export const fetchSeriesFailure = error => ({
    type: FETCH_SERIES_FAILURE,
    payload: { error}
});