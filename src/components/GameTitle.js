import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import {useContext} from 'react'
import { GameContext } from '../states/GameContext'


const GameTitle = ({title}) => {

    const [getGame] = useContext(GameContext)
    const loc = useLocation()

    const setTitleByLoc = () => {
        switch(loc.pathname){
            case '/start':
                return 'Start Game'
            case '/settings':
               return 'Settings'
            case '/about':
                return 'About'
            default:
                break
        }
        return title
    }

    const setTitleByQuestion = () => {
        title = `${getGame.curr_question}/${getGame.questions}`
        return title
    }

    return (
        <div className='game-title'>
            <h2 className=''>
                {(getGame.started && loc.pathname === '/game') ? setTitleByQuestion() : setTitleByLoc()}
                {(getGame.started && loc.pathname === '/game') ? <br /> : ''}
                {(getGame.started && loc.pathname === '/game') ? 'question' : ''}
            </h2>

            {loc.pathname === '/' ? <h3 className=''>Character Quiz</h3> : ''}
        </div>
    )
}

GameTitle.defaultProps = {
    title: 'Naruto'
}

GameTitle.prototype = {
    title: PropTypes.string
}

export default GameTitle
