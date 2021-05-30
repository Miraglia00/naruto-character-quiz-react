import {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../components/Button.js'
import { GameContext } from '../states/GameContext.js'
import { QuestionsContext } from '../states/QuestionsContext.js'
import { SettingsContext } from '../states/SettingsContext.js'

const Game = () => {
    const [getQuestions, setQuestions] = useContext(QuestionsContext)
    const [getGame, setGame] = useContext(GameContext)
    const [getSettings, setSettings] = useContext(SettingsContext)
    const [finished, setfinished] = useState(false)
    const history = useHistory()

    useEffect(() => {
        if(getQuestions === undefined || getQuestions === [] || !getGame.started){
            setSettings({...getSettings, popup: {show: true, text: 'Unexpected error', text_color: 'white', color: 'red'}})
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
            history.goBack()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getImage = (qno) => { //question number
        if(typeof getQuestions[qno-1].image != 'string'){
            const keys = Object.keys(getQuestions[qno-1].image)
            return getQuestions[qno-1].image[keys[ keys.length * Math.random() << 0]]
        }else return getQuestions[qno-1].image
    }

    const getNames = (qno) => {
        return getQuestions[qno-1].names
    }

    const onClick = (ind) => {
        if(getGame.game_state.clicked === -1){
            let pts =  getGame.points
            const curr = getGame.curr_question;

            if(getQuestions[curr-1].answ === getNames(curr)[ind]) {
                pts = pts+1
            }

            console.log(pts)

            
            setGame({...getGame, points: pts, game_state: {
                done: true,
                clicked: ind,
                good: getNames(curr).indexOf(getQuestions[curr-1].answ)
            }})
        }          
    }
    const next = () => {
        if(getGame.game_state.clicked !== -1){

            setGame({...getGame,
                curr_question: getGame.curr_question+1,
                game_state: {
                    done: false,
                    clicked: -1,
                    good: -1
                }
            })
        }
    }

    const finish = async () => {
        setfinished(true)
        if(getGame.game_state.clicked !== -1 && getGame.questions === getGame.curr_question){
            setSettings({...getSettings, popup:{
                show: true,
                text: `Congrats! Your points ${getGame.points} out of ${getGame.questions}.`,
                color: 'success',
                text_color: ''
            }})
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
            setQuestions([])
            history.goBack()
        }
    }
    
    return (!finished) ? (
        <div className='container text-center'>
            <div className="text-center">
                <img src={getImage(getGame.curr_question)} alt='' className='img-fluid image' />
            </div>
                <div className='row row-cols-md-2 mt-3'>
               
                {
                    (getGame.game_state.clicked === -1) ?    
                        getNames(getGame.curr_question).map((name, ind) =>{
                            return  (
                            <div className="col-12 mb-2">
                                <Button text={name} className="btn-outline-dark w-100" onClick={()=>onClick(ind)} key={ind} />
                            </div>
                            )
                        })
                    :
                    (getGame.game_state.clicked === getGame.game_state.good) ? 
                        getNames(getGame.curr_question).map((name, ind) =>{
                            return <div className="col-12 mb-2">
                                    <Button text={name} p={5} className={`${(ind === getGame.game_state.good) ? 'btn-success' : 'btn-outline-dark'} w-100 disabled`} onClick={()=>onClick(ind)} key={ind} />
                                </div>
                        })
                    :
                        getNames(getGame.curr_question).map((name, ind) =>{
                            return <div className="col-12 mb-2">
                            <Button 
                            text={name} 
                            className={`${(ind === getGame.game_state.good) ? 'btn-danger' : 'btn-outline-dark'} w-100 disabled`}
                            onClick={()=>onClick(ind)} key={ind} />
                            </div>
                        })      
                }
                </div>

            {
            (getGame.game_state.clicked !== -1) ?
                (getGame.questions === getGame.curr_question) ?
                    <Button text={'Finish'} className="btn-outline-dark" onClick={()=>finish()} /> 
                :
                    <Button text={'Next'} className="btn-outline-dark" onClick={()=>next()} /> 
            :
                null
            }
            
        </div>
    ) : <></>
}

export default Game
