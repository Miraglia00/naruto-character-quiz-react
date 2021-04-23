import {useState, createContext, useEffect} from 'react'

export const QuestionsContext = createContext()

export const QuestionsProvider = (props) => {
    const [getQuestions, setQuestions] = useState(() => {
        let local = sessionStorage.getItem('questions')
        local = (local === 'undefined') ? [] : local
        return local ? JSON.parse(local) : []
    })

    useEffect(() => {
        sessionStorage.setItem('questions', JSON.stringify(getQuestions))
    }, [getQuestions])

    return (
        <QuestionsContext.Provider value={[getQuestions, setQuestions]}>
            {props.children}
        </QuestionsContext.Provider>
    )
}

