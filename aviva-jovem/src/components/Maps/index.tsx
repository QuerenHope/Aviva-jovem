import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { LinkMap } from './style';

const link = 'https://www.google.com/maps/place/Tabern%C3%A1culo+An%C3%A1polis+-+GO/@-16.2956643,-48.9582699,15z/data=!4m6!3m5!1s0x935ea6aafdd5f14b:0x562d6c7095b034e8!8m2!3d-16.2956643!4d-48.9582699!16s%2Fg%2F1hhmmy8sr'

const position = {
    lat:-16.295678, 
    lng: -48.958283
}


const Maps = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDeDR7xoCPzAkjRjxcxcOwSNtI4BDI5Bpk"
    })

    return (
        <LinkMap href={link}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{width:'100%', height:'100%', borderRadius:'15px'}}
                    center={position}
                    zoom={15}
                    id='mapa'
                >
                    <Marker position={position} />
                </GoogleMap>

            ) : <></>
            }
        </LinkMap>
    )
}

export default Maps
