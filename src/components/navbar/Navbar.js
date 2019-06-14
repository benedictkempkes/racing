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
        <div className="navbarItem current" style={(pagination.NAME === 'Gosila') ? {justifyContent: 'center'}: {}}>
            {(pagination.NAME === 'Gosila') ? pagination.NAME : serie['1']}
        </div>
        <div className="navbarItem next">
            {(pagination.NEXT) ? <NavbarController page={pagination.NEXT} style='navbarButton'>{pagination.NEXT.NAME}</NavbarController> : undefined}
        </div>
        {(pagination.BACK || pagination.NEXT) ? <button className="menuButtons" onClick={() => onClick((menu) ? false : true)}>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </button> : undefined}
        {(menu) ? <div className="menu" onBlur={() => onClick(false)}>
            <div className="navbarItem">
                {(pagination.BACK) ? <NavbarController page={pagination.BACK} style='navbarButton'>{pagination.BACK.NAME}</NavbarController> : undefined}
            </div>
            <div className="navbarItem">
                {(pagination.NEXT) ? <NavbarController page={pagination.NEXT} style='navbarButton'>{pagination.NEXT.NAME}</NavbarController> : undefined}
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