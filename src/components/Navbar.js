import React from 'react';
import Profile from './Profile';
import Navigation from '../containers/Navigation';

import { HOMEPAGE, PROFILE, ARCHIVE } from '../constants';

const Navbar = () => (
    <div>
        < Navigation page={HOMEPAGE}>
            Rennserien
        </ Navigation>
        < Navigation page={PROFILE}>
            Profil
        </ Navigation>
        < Navigation page={ARCHIVE}>
            Archiv
        </ Navigation>
    </div>
)

export default Navbar