import PropTypes from 'prop-types'

const Button = ({text, onClick, className}) => {
    return (
        <button
        className={`btn ${className}`}
        type="button"
        onClick={onClick}
        >{text}</button>
    )
}

Button.defaultProps = {
    text: "Button"
}

Button.prototype = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
