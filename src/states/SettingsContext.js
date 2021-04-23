import {useState, createContext, useEffect} from 'react'

export const SettingsContext = createContext()

export const SettingsProvider = (props) => {
    const [getSettings, setSettings] = useState(() => {
        const def_settings = 
            {
                sound: false,
                loader: false,
                popup: {
                    show: false,
                    text: '',
                    color: '',
                    text_color: '',
                    time: 3000
            }
        }
        const local = sessionStorage.getItem('settings')
        
        return local ? {...JSON.parse(local), sound: false} : def_settings
    })

    useEffect(() => {
        sessionStorage.setItem('settings', JSON.stringify(getSettings))
    }, [getSettings])

    return (
        <SettingsContext.Provider value={[getSettings, setSettings]}>
            {props.children}
        </SettingsContext.Provider>
    )
}

