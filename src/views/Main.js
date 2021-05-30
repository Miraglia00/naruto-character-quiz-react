import kunai from '../images/kunai.png'
import useSound from 'use-sound'
import kunai_hover from '../sounds/kunai_hover.wav'
import {useContext} from 'react'
import {SettingsContext} from '../states/SettingsContext.js'
import HButton from '../components/HButton.js'

const Main = () => {
    const [getSettings] = useContext(SettingsContext)
    const vol = (getSettings.sound) ? 0.3 :  0.0
    
    const [play, { stop }] = useSound(kunai_hover, {volume: vol, interrupt:true});

    return (
        <div className='main-view d-flex flex-column flex-grow-1 justify-content-center'>
            <div className='mb-3 text-center md:text-left'>
                <HButton text="Start game" hover_img={kunai} color={"black"} onMouseEnter={play} onMouseLeave={stop} size={2} to="/start"></HButton>
            </div>
            <div className='mb-3 text-center md:text-left'>
                <HButton text="Settings" hover_img={kunai} color={"black"} onMouseEnter={play} onMouseLeave={stop} size={3} to="/settings"></HButton>
            </div>
            <div className='mb-3 text-center md:text-left'>
                <HButton text="About" hover_img={kunai} color={"black"} onMouseEnter={play} onMouseLeave={stop} size={3} to="/about"></HButton>
            </div>
        </div>
    )
}

export default Main
