import {useContext, useEffect} from 'react'
import { SettingsContext } from '../states/SettingsContext'

const PopUp = () => {

    const [getSettings, setSettings] = useContext(SettingsContext)

    useEffect(() => {
      if(getSettings.popup.show){
        const timer = setTimeout(() => {
          setSettings({...getSettings, popup: {
              show: false
          }})
       }, 3000)

       return () => clearTimeout(timer)
      } 
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getSettings.popup.show])

    return(
        <>
            {(getSettings.popup.show) ?  
            <div className="modal d-table" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className={`modal-content bg-${getSettings.popup.color}`}>
                <div className="modal-body d-flex justify-content-center align-items-center">
                  <p className={`m-0 p-0 text-${{color: getSettings.popup.text_color}}`}>{getSettings.popup.text}</p>
                </div>
              </div>
            </div>
          </div>
            : null }
        </>
        
    )
}

export default PopUp
