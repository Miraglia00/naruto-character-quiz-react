import {useContext} from 'react'
import { SettingsContext } from "../states/SettingsContext";
import shuriken from '../images/shuriken.png'

const Loader = () => {

    const [getSettings] = useContext(SettingsContext)

    return(
        <div>
            {(getSettings.loader) ? 
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter backdrop-blur-sm text-center'>
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
                <img className='h-48 animate-spin' src={shuriken} alt=''></img>
                <h1 className='text-3xl'>Loading...</h1>
            </div>
            </div>
            : null }
        </div>
        
    )
}

export default Loader
