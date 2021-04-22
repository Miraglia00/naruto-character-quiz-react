import { useHistory,useLocation } from "react-router-dom";
import {useContext} from 'react'
import { SettingsContext } from "../states/SettingsContext";

const BackButtonComponent = () => {

    let history = useHistory();
    const location = useLocation()
    const [getSettings, setSettings] = useContext(SettingsContext)

    const handlegoback = () => {
        if(getSettings.started){
            history.push('/') 
        }else{
            history.goBack()
        }
        
    }

    return (
        <div className='fixed p-5 fill-current scale-100 left-0'>
            {location.pathname !== '/' ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handlegoback}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg> 
            :
            <></> }
        </div>
    )

}

export default BackButtonComponent
