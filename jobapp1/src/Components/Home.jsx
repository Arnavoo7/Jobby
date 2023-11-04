import React, { useContext } from 'react';
import "../Styles/Home.css";
import CenterArea from './CenterArea';
import ModalUpdates from './ModalUpdates';
import { modalContext } from '../Providers/ModalProvider';

const Home = () => {

  const{modal} = useContext(modalContext);

  return (   
    <div>
    {modal === true ? 
    (< ModalUpdates />)
    :
    (<CenterArea />)
    }
    </div>
  )
}

export default Home