import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return <button style={{backgroundColor: color}} onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    color: 'transparent',
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
