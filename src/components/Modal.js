import PropTypes from 'prop-types'

const Modal = ({text, yesText, onYesClick, onNoClick, show}) => {

    return(
        <>
            {(show) ? 
            <div className="modal d-table" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-dialog-centered">
              <div className={`modal-content bg-secondary`}>
                <div className="modal-body d-flex justify-content-center align-items-center">
                  <p className={`m-0 p-0`}>{text}</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-success" onClick={onYesClick}>{yesText}</button>
                  <button className="btn btn-danger" onClick={onNoClick}>No</button>
                </div>
              </div>
            </div>
          </div>
            : null }
        </>
        
    )
}

Modal.defaultProps = {
    yesText: 'Yes'
}

Modal.prototype = {
    yesText: PropTypes.string
}

export default Modal
