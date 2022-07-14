import React from 'react';
import Map, {Popup} from 'react-map-gl';

const MapPopup = (props) =>{
    const [showPopup, setShowPopup] = React.useState(true);
    return(
        <div>
        {showPopup && (
            <Popup longitude={props.longitude} latitude={props.latitude}
              anchor="bottom"
              offset={(30)}
              onClose={() => setShowPopup(false)}>
              <h1>{props.data}</h1>
            </Popup>)}   
        </div>
    )
}

export default MapPopup