import React, { createContext, useState } from 'react'

export const modalContext = createContext();


const ModalProvider = ({children}) => {


  const[modal, setModal] = useState(true);

  return (
    <modalContext.Provider value={{modal, setModal}}>
        {children}
    </modalContext.Provider>
  )
}



export default ModalProvider;