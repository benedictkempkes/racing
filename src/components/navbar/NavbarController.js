import { connect } from 'react-redux'
import Button from '../elements/Button'
import { changePage } from '../../actions';

import { GOSILA, FAHRERWERTUNG, RENNKALENDER} from '../../constants';

const getPage = (page) => {
    let nextPage;
    switch (page.PAGINATION) {
        case GOSILA.PAGINATION:
            nextPage = GOSILA;
            break;
        case FAHRERWERTUNG.PAGINATION:
            nextPage = FAHRERWERTUNG;
            break;
        case RENNKALENDER.PAGINATION:
            nextPage = RENNKALENDER;
            break;
        default:
            nextPage = GOSILA;
    }
    return nextPage;
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.page === state.pagination,
    style: ownProps.style
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(changePage(getPage(ownProps.page)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)
