import React, { useContext } from 'react'
import { modalContext } from '../Providers/ModalProvider';


const ModalUpdates = () => {


  const {modal, setModal} = useContext(modalContext);

  if(modal === true){
    document.body.style.backgroundColor = '#36454F';
  }

  const modalClose = () => {
    document.body.style.backgroundColor = '#fff';
    setModal(false)
  }

  return (
    <div className='w-screen flex lg:flex-col md:flex-col justify-center items-center mt-28'>
            <div className='bg-lime-100 rounded-lg p-8 ml-8 w-auto h-auto'>

                <div className="flex justify-between items-center">
                <h1 className='underline'>Walkthrough:</h1>
                <button onClick={modalClose} className='bg-black text-white rounded-full p-1 pl-3 pr-3 ' title='Close'>X</button>
            </div>

            <h4>◙ Everyday jobs will be posted from 6/11/23.</h4>
            <h4>◙ You can use Filter for specific job results.</h4>
            <h4>◙ Day/ Night background.</h4>

            <br />
            <h1 className='underline '>Upcoming Updates:</h1>
            <h4>◙ A seperate section dedicated for Linkedin jobs.</h4>
            <h4>◙ Contact form will be included for any request or feedback.</h4>

            <h5 className='text-cyan-700 mt-5'>* Switch to Desktop version for better experience.</h5>
            <h5 className='text-red-900 '>* Close this box to access the site.</h5>
        </div>
    </div>
  )
}



export default ModalUpdates;