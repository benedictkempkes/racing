import { connect } from 'react-redux'
import View from './View'


const mapStateToProps = state => ({
    activePage: state.pagination
})


export default connect(
    mapStateToProps
)(View)