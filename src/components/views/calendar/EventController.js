import { connect } from 'react-redux'
import Button from '../../elements/Button';

import { changePage } from '../../../actions';

const fetchData = (dispatch, ownProps) => {
    console.log(ownProps.race);
    
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