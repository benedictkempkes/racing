import { 
    FETCH_SERIES_BEGIN,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE,

    FETCH_DATA_BEGIN,
    FETCH_SERIE_SUCCESS,
    FETCH_RESULT_SUCCESS,
    FETCH_DATA_FAILURE,

    PAGINATION,
    PAGINATIONSECOND
} from '../constants';

export const init = () => {
    const parms = {
        name: "Alle Serien",
        tab: "Übersicht",
        secondtab: "",
        thirdtab: ""
    };
    return dispatch => {
        dispatch(fetchSeriesBegin());
        //'http://localhost/projects/racingBackend/racing.php'
        //'https://benedictkempkes.000webhostapp.com/racingBackend/racing.php'
        fetch('http://localhost/projects/racingBackend/racing.php', {
                method: 'POST',
                body: JSON.stringify(parms)
            })
            .then(res => res.json())
            .then(json => {
                json = json[0];
                json['1'] = undefined;
                let series = [];
                for (let property in json) {
                    if (json[property]){
                        series.push(json[property]);
                    }
                }
                dispatch(fetchSeriesSuccess(series));
                return series;
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

export const fetchSerieSuccess = (data, page, serie) => ({
    type: FETCH_SERIE_SUCCESS,
    payload: data,
    page,
    serie
});

export const fetchResultSuccess = (data, page, race, place) => ({
    type: FETCH_RESULT_SUCCESS,
    payload: data,
    page,
    race,
    place
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