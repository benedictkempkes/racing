import { connect } from 'react-redux'
import View from './View'


const mapStateToProps = state => ({
    activePage: state.pagination,
    state: console.log(state)
})


export default connect(
    mapStateToProps
)(View)