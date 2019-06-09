import { connect } from 'react-redux'
import Button from '../../elements/Button';

import { changePage } from '../../../actions';


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.page === state.paginationSecond,
    style: ownProps.style
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(changePage(ownProps.page))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)