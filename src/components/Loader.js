import {useContext} from 'react'
import { SettingsContext } from "../states/SettingsContext";
import shuriken from '../images/shuriken.png'

const Loader = () => {

    const [getSettings] = useContext(SettingsContext)

    return(
        <div>
            {(getSettings.loader) ? 
            <div className='loader'>
            <div className="mx-auto d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <img className='w-50' src={shuriken} alt=''></img>
                <h1 className='text-center'>Loading...</h1>
            </div>
            </div>
            : null }
        </div>
        
    )
}

export default Loader
