import React from 'react';
import { connect } from 'react-redux';
import './navbar.less';

import { toggleMenu } from '../../actions';

import NavbarController from './NavbarController';

const Navbar = ({ pagination, serie, onClick, menu }) => (
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
        <button className="menuButtons" onClick={() => onClick((menu) ? false : true)}>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </button>
        {(menu) ? <div className="menu">
            <div className="navbarItem back">
                {<NavbarController page={pagination} style='navbarButton'>{pagination.NAME}</NavbarController>}
            </div>
            <div className="navbarItem next">
                {<NavbarController page={pagination} style='navbarButton'>{pagination.NAME}</NavbarController>}
            </div>
        </div> : undefined}
    </div>
)

const mapStateToProps = state => ({
    pagination: state.pagination,
    serie: state.serie,
    menu: state.menu
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: value => dispatch(toggleMenu(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)