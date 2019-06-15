import { connect } from 'react-redux'
import View from './View'


const mapStateToProps = state => ({
    activePage: state.pagination,
    loading: state.loading
})


export default connect(
    mapStateToProps
)(View)