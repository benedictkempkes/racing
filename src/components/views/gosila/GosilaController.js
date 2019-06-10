import { connect } from 'react-redux'
import { fetchDataBegin, fetchSerieSuccess, fetchDataFailure, changePage } from '../../../actions';
import Button from '../../elements/Button';

const fetchData = (dispatch, ownProps) => {
    dispatch(fetchDataBegin());
    const parms = {
        name: ownProps.serie['1'],
        tab: 'Kalender',
        secondtab: 'Fahrerwertung',
        thirdtab: 'Teamwertung'
    }
    if (ownProps.oldSerie !== ownProps.serie){
        return fetch('http://localhost/projects/racingBackend/racing.php', {
            method: 'POST',
            body: JSON.stringify(parms)
        })
            .then(res => res.json())
            .then(json => {
                json[0]['1'] = undefined;
                let data = [];
                for(let i = 0; i < json.length; i++){
                    let item = [];
                    for (let property in json[i]) {
                        if (json[i][property]) {
                            item.push(json[i][property]);
                        }
                    }
                    data.push(item);
                }
                dispatch(fetchSerieSuccess(data, ownProps.page, ownProps.serie));
                
                return data;
            })
            .catch(error => dispatch(fetchDataFailure(error)));
    }else{
        return dispatch(changePage(ownProps.page));
    }
}


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.page === state.pagination,
    style: ownProps.style
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => fetchData(dispatch, ownProps)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)