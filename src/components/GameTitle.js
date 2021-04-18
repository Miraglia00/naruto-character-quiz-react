import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'


const GameTitle = ({title}) => {
    const loc = useLocation()
    switch(loc.pathname){
        case '/start':
            title = 'Start Game'
            break
        case '/settings':
            title='Settings'
            break
        case '/about':
            title='About'
            break
        default:
            break
    }
    return (
        <div className='self-center text-center pt-5'>
            <h1 className='text-6xl sm:text-7xl md:text-8xl'>{title}</h1>

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
