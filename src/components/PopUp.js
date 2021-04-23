import {useContext, useEffect} from 'react'
import { SettingsContext } from '../states/SettingsContext'

const PopUp = () => {

    const [getSettings, setSettings] = useContext(SettingsContext)

    useEffect(() => {
        const timer = setTimeout(() => {
           setSettings({...getSettings, popup: {
               show: false
           }})
        }, 3000)

        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getSettings.popup.show])

    return(
        <div>
            {(getSettings.popup.show) ? 
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter backdrop-blur-sm'>
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              <div className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-${getSettings.popup.color}-500 outline-none focus:outline-none`}>
                <div className="relative p-6 flex-auto">
                  <p className='my-4 text-lg leading-relaxed' style={{color: getSettings.popup.text_color}}>
                    {getSettings.popup.text}
                  </p>
                </div>
              </div>
            </div>
            </div>
            : null }
        </div>
        
    )
}

export default PopUp
