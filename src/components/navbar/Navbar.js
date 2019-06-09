import React from 'react';
import { connect } from 'react-redux';

import NavbarController from './NavbarController';

const Navbar = ({ pagination }) => (
    <div>
        {(pagination.BACK) ? <NavbarController page={pagination.BACK} style='navbarButton'>{pagination.BACK.NAME}</NavbarController> : undefined}
        <div>
            {pagination.NAME}
        </div>
        {(pagination.NEXT) ? <NavbarController page={pagination.NEXT} style='navbarButton'>{pagination.NEXT.NAME}</NavbarController> : undefined}
    </div>
)

const mapStateToProps = state => ({
    pagination: state.pagination
})

export default connect(
    mapStateToProps
)(Navbar)