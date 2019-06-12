import React from 'react';
import { connect } from 'react-redux';
import './navbar.less';

import NavbarController from './NavbarController';

const Navbar = ({ pagination, serie }) => (
    <div className="navbar">
        <div className="navbarItem back">
            {(pagination.BACK) ? <NavbarController page={pagination.BACK} style='navbarButton'>{pagination.BACK.NAME}</NavbarController> : undefined}
        </div>
        <div className="navbarItem">
            {(pagination.NAME === 'Gosila') ? pagination.NAME : serie['1']}
        </div>
        <div className="navbarItem next">
            {(pagination.NEXT) ? <NavbarController page={pagination.NEXT} style='navbarButton'>{pagination.NEXT.NAME}</NavbarController> : undefined}
        </div>
    </div>
)

const mapStateToProps = state => ({
    pagination: state.pagination,
    serie: state.serie
})

export default connect(
    mapStateToProps
)(Navbar)