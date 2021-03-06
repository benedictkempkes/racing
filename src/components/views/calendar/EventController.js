import { connect } from 'react-redux'
import Button from '../../elements/Button';

import { fetchDataBegin, fetchResultSuccess, fetchDataFailure, changePage } from '../../../actions';

const fetchData = (dispatch, ownProps) => {
    dispatch(fetchDataBegin());
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    const parms = {
        name: ownProps.serie['1'],
        tab: ownProps.race,
        secondtab: '',
        thirdtab: ''
    }
    if(ownProps.race !== ownProps.oldRace){
        return fetch('https://benedictkempkes.de/racingBackend/racing.php', {
            method: 'POST',
            body: JSON.stringify(parms)
        })
            .then(res => res.json())
            .then(json => {
                let data = [];
                for (let property in json[0]) {
                    data.push(json[0][property]);
                }
                
                dispatch(fetchResultSuccess(data, ownProps.page, ownProps.race, ownProps.place));

                return data;
            })
            .catch(error => dispatch(fetchDataFailure(error)));
    }else{
        return dispatch(changePage(ownProps.page));
    }
}

const mapStateToProps = (state, ownProps) => ({
    active: (ownProps.race)? false : true,
    style: ownProps.style
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => fetchData(dispatch, ownProps)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)