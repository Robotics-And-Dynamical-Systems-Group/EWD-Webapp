import React from 'react';
import RoomIcon from '@mui/icons-material/Room';

const EWDDetails = (props) =>{
    return(
        <div>
        <button>
        <RoomIcon></RoomIcon>
        <p>SPO2 : {props.spo2}</p>
        <p>EKG : {props.EKG}</p>
        </button>
        </div>
    )
}

export default EWDDetails