import {useState, createContext, useEffect} from 'react'

export const GameContext = createContext()

export const GameProvider = (props) => {
    const [getGame, setGame] = useState(() => {
        const def_settings = 
        {
            started: false,
            questions: 2,
            curr_question: 0,
            game_state: {
                done: false,
                clicked: -1,
                good: -1
            },
            points: 0
        }

        const local = sessionStorage.getItem('game')
        
        return local ? JSON.parse(local) : def_settings
    })

    useEffect(() => {
        sessionStorage.setItem('game', JSON.stringify(getGame))
    }, [getGame])

    return (
        <GameContext.Provider value={[getGame, setGame]}>
            {props.children}
        </GameContext.Provider>
    )
}

