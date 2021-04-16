import GameTitle from '../components/GameTitle.js'
import {Link} from 'react-router-dom'
import kunai from '../images/kunai.png'

const Main = () => {
    return (
        <div className='full-page main-menu full-bg'>
            <GameTitle />
            <div className='container'>
                <div className='links'>
                <div>
                    <Link to='/start' className='link'>
                        <img className='link-img' src={kunai} alt=''></img>
                        <div style={{display: 'inline-block'}}>Start Game</div>
                    </Link>
                </div>
                <div>
                    <Link to='/start' className='link smaller'>
                        <img className='link-img' src={kunai} alt=''></img>
                        <div style={{display: 'inline-block'}}>Settings</div>
                    </Link>
                </div>
                <div>
                    <Link to='/start' className='link smaller'>
                        <img className='link-img' src={kunai} alt=''></img>
                        <div style={{display: 'inline-block'}}>About</div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main
