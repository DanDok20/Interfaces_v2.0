import React from "react";
import Map from "./Map";
import './components/Maps.css'

import map1 from './mapas/map1.jpg'
import map2 from './mapas/map2.jpg'
import map3 from './mapas/map3.jpg'
import map4 from './mapas/map4.jpg'
import map5 from './mapas/map5.jpg'
import map6 from './mapas/map6.jpg'
import map7 from './mapas/map7.jpg'
import map8 from './mapas/map8.jpg'
import map9 from './mapas/map9.jpg'
import map10 from './mapas/map10.jpg'
import map11 from './mapas/map11.jpg'
import map12 from './mapas/map12.jpg'

const mapas = [
    {
        id: 1,
        title: 'Estadio',
        image: map1,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 2,
        title: 'Combate Cercano',
        image: map2,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 3,
        title: 'Praderas Esmeralda',
        image: map3,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 4,
        title: 'Banco',
        image: map4,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 5,
        title: 'Frontera',
        image: map5,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 6,
        title: 'Chalet',
        image: map6,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 7,
        title: "Club",
        image: map7,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 8,
        title: 'Litoral',
        image: map8,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
 
    {
        id: 9,
        title: 'consulado',
        image: map9,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 10,
        title: 'Favela',
        image: map10,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 11,
        title: 'Fortaleza',
        image: map11,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 12,
        title: 'Base Hereford',
        image: map12,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
 
]


function Maps() {
    return (
        <div className="Maps">
            <div className="Titulo"><h1 className="text-center" id="Titulo">Mapas</h1></div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row"> 
                    {
                        mapas.map( (mapas) => (
                            <div className="col-md-3" key={mapas.id}>
                                <Map title={mapas.title} imageSource={mapas.image} url={mapas.url}/>
                            </div>                           
                        ))
                    }
                </div>
                
            </div>
        </div>

    )
}

export default Maps