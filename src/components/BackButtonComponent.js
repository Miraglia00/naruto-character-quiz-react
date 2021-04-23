import { useHistory,useLocation } from "react-router-dom";
import {useContext, useState} from 'react'
import { GameContext } from "../states/GameContext";
import Modal from '../components/Modal.js'
import { QuestionsContext } from "../states/QuestionsContext";

const BackButtonComponent = () => {

    let history = useHistory();
    const location = useLocation()
    const [getGame, setGame] = useContext(GameContext)
    // eslint-disable-next-line no-unused-vars
    const [getQuestions, setQuestions] = useContext(QuestionsContext)
    const [modal, setmodal] = useState(false)

    const handlegoback = () => {
        if(getGame.started){
            setmodal(true) 
        }else{
           history.goBack()
        }
        
    }

    const YesClick = () => {
        setmodal(false) 
        
        setQuestions([])
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

        history.push('/')
    }

    return (
        <div className='fixed p-5 fill-current scale-100 left-0'>
            <Modal text={'Are you sure to quit from game? Progress will be lost!'} yesText={'Yes'} onYesClick={YesClick} onNoClick={()=> setmodal(false)} show={modal} />
            {location.pathname !== '/' ?
                (getGame.started) ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handlegoback}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg> 
                :
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handlegoback}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg> 
            :
            <></> }
        </div>
    )

}

export default BackButtonComponent
