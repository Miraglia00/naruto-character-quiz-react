import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../components/Button.js'
import HButton from '../components/HButton.js'
import { SettingsContext } from '../states/SettingsContext.js'
import { GameContext } from '../states/GameContext'
import { QuestionsContext } from '../states/QuestionsContext.js'
import ConstructQuestions from '../services/ConstructQuestions.js'
import shur from '../images/shuriken.png'
import useSound from 'use-sound'
import kunai_hover from '../sounds/kunai_hover.wav'

const StartGame = () => {

    let [getNum, setNum] = useState(2)

    const [getSettings, setSettings] = useContext(SettingsContext)
    // eslint-disable-next-line no-unused-vars
    const [getQuestions, setQuestions] = useContext(QuestionsContext)

    const [getGame, setGame] = useContext(GameContext)

    const vol = (getSettings.sound) ? 0.3 :  0.0;

    const [play, { stop }] = useSound(kunai_hover, {volume: vol, interrupt:true});

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
            setSettings({...getSettings, popup: {show: true, text_color: 'white', color: 'danger', text: error.message}})
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
        <div className='d-flex flex-column flex-grow-1 align-items-center'>
            <div className='container d-flex flex-grow-1 justify-content-center align-items-center'>
                <div className="row align-items-center">
                    <div className="col-6 offset-0">
                        Number of questions:
                    </div>
                    <div className="col-6 d-flex  flex-column justify-content-center align-items-center">
                    <Button className="d-flex justify-content-center align-items-center btn-outline-dark" onClick={incrementNum} 
                        text={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up" viewBox="0 0 16 16">
                            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                            </svg>
                        } 
                    />
                        
                    <div className="text-center">{getNum}</div>

                    <Button className="d-flex justify-content-center align-items-center btn-outline-dark" onClick={decrementNum} 
                        text={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                        } 
                    />
                    </div>
                </div>        
            </div>

            <HButton disable onMouseEnter={play} onMouseLeave={stop} hover_img={shur} location={"both"} margin={20} className="mb-5" text={'Let\'s start!'} onClick={startGame} />
        </div>
    )
}


export default StartGame
