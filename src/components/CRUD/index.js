import React from "react";
import StartFirebase from "../FirebaseConfig";
import { ref, onValue } from "firebase/database";
import Map, {Marker,Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapPopup from "./mapPopup";


const firedb = StartFirebase();
const dbref = ref(firedb,"EWD");

export class Realtimedata extends React.Component{

constructor(){
    super();
    this.state = {
        mydata: [],
        showPopup : false
    }
}

    componentDidMount(){
        onValue(dbref, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyname = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyname, "data" : data})
            })
            this.setState({mydata : records})
        })
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                <Map
                    initialViewState={{
                        latitude: 33.305241,
                        longitude: -111.680139,
                        zoom: 5
                    }}
                    style={{width: '100vw', height: '77vh'}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                >
                    {this.state.mydata.map((test) => 
                    <div>
                    {console.log(test.key)}    
                    {console.log(test.data.Latitude)}
                    {console.log(test.data.Longitude)}
                    {console.log("----------------------")}
                    <Marker longitude={test.data.Longitude} latitude={test.data.Latitude} color="slateblue"/>
                    </div>)}
                </Map>
                </tr>
                <tr>
                                {this.state.mydata.map((row,index) => 
                                        <button>
                                            <td>
                                                <tr>Name : {row.key}</tr>
                                                <tr>EKG : {row.data.EKG}</tr>
                                                <tr>SPO2 : {row.data.Spo2}</tr>
                                                <tr>Temp : {row.data.Temprature}</tr>
                                                <tr>Lat : {row.data.Latitude}</tr>
                                                <tr>Lon : {row.data.Longitude}</tr>
                                            </td>
                                        </button>
                                )}
                            </tr>
                    </tbody>
                </table>
            </div>
                )
            }
}