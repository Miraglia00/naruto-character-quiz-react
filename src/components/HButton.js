import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const HButton = ({text, size, color, hover_img, location, margin, onMouseEnter, onMouseLeave, to, className, disable, onClick}) => {
    let HButtonAligned;
    switch(location){
        case "left":
            HButtonAligned = ((disable) ? 
                <div className={`cursor-p link d-flex justify-content-center align-items-center ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
                    <img className="d-none d-md-inline-flex" src={hover_img} alt='' style={{marginRight: margin+"rem"}}></img>
                    <div className={`fs-${size} p-0 m-0`} style={{color: color}}>{text}</div>
                </div>
                :
                <Link className={`link d-flex justify-content-center align-items-center ${className}`} to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <img className="d-none d-md-inline-flex" src={hover_img} alt='' style={{marginRight: margin+"rem"}}></img>
                    <div className={`fs-${size} p-0 m-0`} style={{color: color}}>{text}</div>
                </Link>
            )
            break;
        case "right":
            HButtonAligned = ((disable) ? 
                <div className={`cursor-p link d-flex justify-content-center align-items-center ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
                    <div className={`fs-${size} p-0 m-0`} style={{color: color}}>{text}</div>
                    <img className="d-none d-md-inline-flex r-180" src={hover_img} alt='' style={{marginLeft: margin+"rem"}}></img>
                </div>
                :
                <Link className={`link d-flex justify-content-center align-items-center ${className}`} to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <div className={`fs-${size} p-0 m-0`} style={{color: color}}>{text}</div>
                    <img className="d-none d-md-inline-flex r-180" src={hover_img} alt='' style={{marginLeft: margin+"rem"}}></img>
                </Link>
            )
            break;
        case "both":
            HButtonAligned = ((disable) ? 
                <div className={`cursor-p link d-flex justify-content-center align-items-center ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
                    <img className="d-none d-md-inline-flex" src={hover_img} alt='' style={{marginRight: margin+"rem"}}></img>
                    <div className={`fs-${size} p-0 m-0`} style={{color: color}}>{text}</div>
                    <img className="d-none d-md-inline-flex r-180" src={hover_img} alt='' style={{marginLeft: margin+"rem"}}></img>
                </div>
                :
                <Link className={`link d-flex justify-content-center align-items-center ${className}`} to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <img className="d-none d-md-inline-flex" src={hover_img} alt='' style={{marginRight: margin+"rem"}}></img>
                    <div className={`fs-${size} p-0 m-0`} style={{color: color}}>{text}</div>
                    <img className="d-none d-md-inline-flex r-180" src={hover_img} alt='' style={{marginLeft: margin+"rem"}}></img>
                </Link>
            )
            break;
        default:
            break;
    }

    return (
        <div className='h-button'>
            {HButtonAligned}
        </div>
    )
}

HButton.defaultProps = {
    size: 3,
    color: "Black",
    location: "left",
    margin: 30,
    to: ""
}

HButton.prototype = {
    size: PropTypes.number,
    color: PropTypes.string,
    location: PropTypes.string,
    margin: PropTypes.number,
    to: PropTypes.string
}

export default HButton
