import {Link} from 'react-router-dom'
import kunai from '../images/kunai.png'
import PropTypes from 'prop-types'
let links;

const HButton = ({text, size}) => {
    return (
        <div className='flex justify-center items-center' style={links}>
            <div className='text-center md:text-left'>
                <Link className='link'>
                    <img className={`h-${size*3} link-img`} src={kunai} alt=''></img>
                    <div className={getSize(size)} style={{display: 'inline-block', margin: 'auto'}}>{text}</div>
                </Link>
            </div>
        </div>
    )
}

HButton.defaultProps = {
    size: 4,
}

const getSize = (size) => {
    switch(size){
        case 2: 
            links = {
                position: 'relative',
                width: '600px'
            }
            return "text-2xl sm:text-4xl";

        case 4: 
            links = {
                position: 'relative',
                width: '800px'
            }
            return "text-4xl sm:text-6xl";
        default: 
            links = {
                position: 'relative',
                width: '300px'
            }
            return "text-1xl sm:text-2xl";
    }
}



export default HButton
