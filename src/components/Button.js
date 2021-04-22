import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Button = ({color, text, onClick, border, p, link}) => {
    return (link) ?
        <Link onClick={onClick} to={link} className={`custom-button p-${p} ${(border) ? 'border-2 rounded border-black' : ''}`} style={{backgroundColor: color}}>{text}</Link>
        :
        <button className={`custom-button p-${p} ${(border) ? 'border-2 rounded border-black' : ''}`} style={{backgroundColor: color}} onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    color: 'transparent',
    p: '2'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    border: PropTypes.bool,
    p: PropTypes.string,
    link: PropTypes.string
}

export default Button
