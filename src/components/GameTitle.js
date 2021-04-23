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
        <div className='self-center text-center pt-5'>
            <h1 className='text-4xl lg:text-5xl break-words'>
                {(getGame.started && loc.pathname === '/game') ? setTitleByQuestion() : setTitleByLoc()}
                {(getGame.started && loc.pathname === '/game') ? <br /> : ''}
                {(getGame.started && loc.pathname === '/game') ? 'question' : ''}
            </h1>

            {loc.pathname === '/' ? <h2 className='mt-4 text-base sm:text-xl md:text-2xl'>Character Quiz</h2> : ''}
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
