import { connect } from 'react-redux'
import { fetchDataBegin, fetchDataSuccess, fetchDataFailure } from '../../../actions';
import Button from '../../elements/Button';

const fetchData = (dispatch, ownProps) => {
    dispatch(fetchDataBegin());
    return fetch(ownProps.url)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json, ownProps.page, ownProps.serie));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
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