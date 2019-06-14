export const FETCH_SERIES_BEGIN = 'FETCH_SERIES_BEGIN';
export const FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS';
export const FETCH_SERIES_FAILURE = 'FETCH_SERIES_FAILURE';

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_SERIE_SUCCESS = 'FETCH_SERIE_SUCCESS';
export const FETCH_RESULT_SUCCESS = 'FETCH_RESULT_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const PAGINATION = 'PAGINATION';
export const PAGINATIONSECOND = 'PAGINATIONSECOND';
export const TOGGLEMENU = 'TOGGLEMENU';



export const GOSILA = {
    PAGINATION: 'GOSILA',
    NAME: 'Gosila',
    BACK: undefined,
    NEXT: undefined
};

export const FAHRERWERTUNG = {
    PAGINATION: 'FAHRERWERTUNG',
    NAME: 'Fahrerwertung',
    BACK: GOSILA,
    NEXT: {
        PAGINATION: 'RENNKALENDER',
        NAME: 'Rennkalender'
    }
};

export const RENNKALENDER = {
    PAGINATION: 'RENNKALENDER',
    NAME: 'Rennkalender',
    BACK: {
        PAGINATION: 'GOSILA',
        NAME: 'Gosila'
    },
    NEXT: {
        PAGINATION: 'FAHRERWERTUNG',
        NAME: 'Fahrerwertung'
    }
};

export const ERGEBNIS = {
    PAGINATION: 'ERGEBNIS',
    NAME: 'Ergebnis',
    BACK: {
        PAGINATION: 'GOSILA',
        NAME: 'Gosila'
    },
    NEXT: {
        PAGINATION: 'RENNKALENDER',
        NAME: 'Rennkalender'
    }
};

export const HIGHLIGHT = {
    PAGINATION: 'HIGHLIGHT',
    NAME: 'Highlight',
    BACK: {
        PAGINATION: 'GOSILA',
        NAME: 'Gosila'
    },
    NEXT: {
        PAGINATION: 'RENNKALENDER',
        NAME: 'Rennkalender'
    }
};
