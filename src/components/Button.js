import PropTypes from 'prop-types'

const Button = ({color, hover_color, text, onClick, border, p, border_color, border_opacity, classes}) => {
    return (
        <button
        className={`p-${p} ${(border) ? `border-2 rounded border-${border_color} border-opacity-${border_opacity}` : ''} bg-${color}-500 text-black rounded shadow hover:bg-${hover_color}-500 hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${classes}`}
        type="button"
        onClick={onClick}
        >{text}</button>
    )
}

Button.defaultProps = {
    color: 'transparent',
    p: '2',
    border_color: 'black',
    border_opacity: '10'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    border: PropTypes.bool,
    p: PropTypes.string,
}

export default Button
