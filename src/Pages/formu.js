import './Formu.css';
import CheckboxForm from '../components/CheckboxForm';
import CitySelect from '../components/CitySelect';
import NotificationPreferences from '../components/NotificationPreferences';
import {FirstContext} from "./Acceuil"
import { useContext } from 'react';
export default function Formu() {
  const {IsDark,setIsDark} =useContext(FirstContext)
  return (
    <div>
      <button style={{ border: 'none', float: 'right', background: 'none', cursor: 'pointer' }} className='BlackMode' onClick={() =>setIsDark(!IsDark) }  >
      {!IsDark ? <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/do-not-disturb-2.png" alt="do-not-disturb-2" /> : <img width="48" height="48" src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png" alt="do-not-disturb-2" />}
      </button>
    <div  className={IsDark ? "LightMode" : "DarkMode" }  >

    <div className='App'>
      
      <NotificationPreferences/>
      <CitySelect/>
      <CheckboxForm/>
    </div>
    </div>
    </div>
  );
}
