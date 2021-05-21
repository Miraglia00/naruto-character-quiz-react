import {Link} from 'react-router-dom'
import kunai from '../images/kunai.png'
import useSound from 'use-sound'
import kunai_hover from '../sounds/kunai_hover.wav'
import {useContext} from 'react'
import {SettingsContext} from '../states/SettingsContext.js'

const Main = () => {
    const [getSettings] = useContext(SettingsContext)
    const vol = (getSettings.sound) ? 0.1 :  0.0
    
    const [play, { stop }] = useSound(kunai_hover, {volume: vol, interrupt:true});

    return (
        <div className='flex-grow flex flex-col justify-center items-center links'>
            <div className='mb-3 text-center md:text-left'>
                <Link to={(getSettings.started) ? '/game' : '/start'} className='link' onMouseEnter={play} onMouseLeave={stop}>
                    <div className='text-4xl sm:text-6xl' style={{display: 'inline-block'}}>Start Game</div>
                </Link>
            </div>
            <div className='mb-3 text-center md:text-left'>
                <Link to='/settings' className='link' onMouseEnter={play} onMouseLeave={stop}>
                    <div className='text-2xl sm:text-4xl' style={{display: 'inline-block'}}>Settings</div>
                </Link>
            </div>
            <div className='mb-3 text-center md:text-left'>
                <Link to='/about' className='link' onMouseEnter={play} onMouseLeave={stop}>
                    <div className='text-2xl sm:text-4xl' style={{display: 'inline-block'}}>About</div>
                </Link>
            </div>
        </div>
    )
}

export default Main
