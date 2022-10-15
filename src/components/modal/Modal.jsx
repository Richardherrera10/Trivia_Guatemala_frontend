import React from 'react'


import styles from './modal.css'

export default function Modal(props) {


  return (
    <>
      <div className='darkBG'>
        <div className={'centered'}>
          <div className='modal'>
            <div className='modalContent'>
              Are you sure you want to delete the item?
            </div>
            <div className='modalActions'>
              <div className='actionsContainer'>
                <button className='deleteBtn' onClick={()=>props.handleDelete()}>
                  Delete
                </button>
                <button
                  id='cancelBtn'
                  className='cancelBtn'
                  onClick={()=>props.closeModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

{/* <div className='darkBG' onClick={() => setIsOpen(false)} />
        <div className={'centered'}>
          <div className={'modal'}>
            <div className={'modalContent'}>
              Are you sure you want to delete the item?
            </div>
            <div className={'modalActions'}>
              <div className={'actionsContainer'}>
                <button className={'deleteBtn'} onClick={()=>props.handleDelete()}>
                  Delete
                </button>
                <button
                  id='cancelBtn'
                  className={'cancelBtn'}
                  onClick={()=>props.closeModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
      </div> */}

