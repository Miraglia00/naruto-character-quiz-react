import React from 'react'
import BackButtonComponent from './BackButtonComponent'
import GameTitle from './GameTitle'
import SoundComponent from './SoundComponent'

const Header = () => {
    return (
        <ul className="nav nav-justified mt-2 p-2">
            <li className="nav-item d-flex justify-content-start">
                <BackButtonComponent />
            </li>
            <li className="nav-item">
                <GameTitle />
            </li>
            <li className="nav-item d-flex justify-content-end">
                <SoundComponent />
            </li>
        </ul>
    )
}

export default Header
