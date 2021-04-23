import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../components/Button.js'
import { SettingsContext } from '../states/SettingsContext.js'
import { GameContext } from '../states/GameContext'
import { QuestionsContext } from '../states/QuestionsContext.js'
import ConstructQuestions from '../services/ConstructQuestions.js'

const StartGame = () => {

    let [getNum, setNum] = useState(2)

    const [getSettings, setSettings] = useContext(SettingsContext)
    // eslint-disable-next-line no-unused-vars
    const [getQuestions, setQuestions] = useContext(QuestionsContext)

    const [getGame, setGame] = useContext(GameContext)
    

    const history = useHistory()

    const incrementNum = () => {
        if(getNum < 10) setNum((getNum+1))
    }

    const decrementNum = () => {
        if(getNum > 2) setNum((getNum-1))
    }

    const startGame = async () => {
        setSettings({...getSettings, loader: true})
        ConstructQuestions(getNum)
        .then(async (response) => {
            setGame({...getGame, questions: getNum, curr_question: 1, started: true})
            setSettings({...getSettings, popup: {show: false}})
            setQuestions(response)

            history.push('/game')
        })
        .catch((error) => {
            console.error('Server Error!')
            setSettings({...getSettings, popup: {show: true, text_color: 'white', color: 'red', text: error.message}})
            setGame(
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
            })
        })
    }

    return (
        <div className='flex-grow flex flex-col justify-between items-center mt-32 md:mt-40 mb-10 text-base sm:text-xl md:text-2xl'>
            <div className='container mx-auto text-center flex-row flex justify-between custom-container p-10 items-center'>
                <div>Number of questions:</div>
                <div className='flex flex-col'>
                    <Button text={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    } p={'0'} onClick={incrementNum}/>
                    
                    <span>{getNum}</span>

                    <Button text={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    } p={'0'} onClick={decrementNum}/>

                </div>
            </div>
            <Button color={'transparent'} border={true} text={'Let\'s start!'} onClick={startGame} />
        </div>
    )
}

export default StartGame
