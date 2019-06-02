import { connect } from 'react-redux'
import PrimaryButton from '../elements/PrimaryButton'
import { changePage } from '../../actions';


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.page === state.pagination
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(changePage(ownProps.page))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrimaryButton)