import {useState, createContext} from 'react'

export const SettingsContext = createContext()

export const SettingsProvider = (props) => {
    const [getSettings, setSettings] = useState({
        sound: false,
        started: false,
        questions: 1,
        curr_question: 0
    })

    return (
        <SettingsContext.Provider value={[getSettings, setSettings]}>
            {props.children}
        </SettingsContext.Provider>
    )
}

