import React from 'react';
import NavbarController from './NavbarController';

import { HOMEPAGE, ARCHIVE } from '../../constants';

const Navbar = () => (
    <div>
        < NavbarController page={HOMEPAGE}>
            Rennserien
        </ NavbarController>
        < NavbarController page={ARCHIVE}>
            Archiv
        </ NavbarController>
    </div>
)

export default Navbar