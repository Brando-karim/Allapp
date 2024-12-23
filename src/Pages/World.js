import './World.css';

import FlagSlider from '../components/FlagSlider';
import {FirstContext} from "./Acceuil"
import { useContext } from 'react';
export default function World() {
  const {IsDark,setIsDark} = useContext(FirstContext)

  return (
    <div>
    <button style={{ border: 'none', float: 'right', background: 'none', cursor: 'pointer' }} className='BlackMode' onClick={() =>setIsDark(!IsDark) }  >
    {!IsDark ? <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/do-not-disturb-2.png" alt="do-not-disturb-2" /> : <img width="48" height="48" src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png" alt="do-not-disturb-2" />}
    </button>
    <div className={IsDark ? "WhiteWorld " : "BlackWorld " }>
    <header>
        <div className='Head'>
        {!IsDark ?<img src="/Logo1.png" alt="" className='Logo' /> :<img src="/LogoWhite.png" alt="" className='Logo' /> }
            <h1>World Slider</h1>
            
            <div className='Logo'></div>
        </div>

    </header>
      <FlagSlider/>
    </div>
    </div>
  
  );
}


