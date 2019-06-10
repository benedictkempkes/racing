import { connect } from 'react-redux'
import Button from '../../elements/Button';

import { fetchDataBegin, fetchResultSuccess, fetchDataFailure, changePage } from '../../../actions';

const fetchData = (dispatch, ownProps) => {
    dispatch(fetchDataBegin());
    console.log(ownProps);
    const parms = {
        name: ownProps.serie['1'],
        tab: 'R' + (ownProps.race + 1),
        secondtab: '',
        thirdtab: ''
    }
    if(ownProps.race !== ownProps.oldRace){
        return fetch('http://localhost/projects/racingBackend/racing.php', {
            method: 'POST',
            body: JSON.stringify(parms)
        })
            .then(res => res.json())
            .then(json => {
                let data = [];
                for (let property in json[0]) {
                    data.push(json[0][property]);
                }
                dispatch(fetchResultSuccess(data, ownProps.page, ownProps.race));

                return data;
            })
            .catch(error => dispatch(fetchDataFailure(error)));
    }else{
        return dispatch(changePage(ownProps.page));
    }
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.page === state.paginationSecond,
    style: ownProps.style
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => fetchData(dispatch, ownProps)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)