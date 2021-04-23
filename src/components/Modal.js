import PropTypes from 'prop-types'

const Modal = ({text, yesText, onYesClick, onNoClick, show}) => {

    return(
        <div>
            {(show) ? 
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter backdrop-blur-sm'>
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-400 outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onNoClick}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onYesClick}
                  >
                    {yesText}
                  </button>
                </div>
              </div>
            </div>
            </div>
            : null }
        </div>
        
    )
}

Modal.defaultProps = {
    yesText: 'Yes'
}

Modal.prototype = {
    yesText: PropTypes.string
}

export default Modal
