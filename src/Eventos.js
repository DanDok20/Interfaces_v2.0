import React from "react";
import Evento from "./Evento";
import './components/Eventos.css'


import Operation1 from './baners/Operation1.jpg'
import Operation2 from './baners/Operation2.jpg'
import Operation3 from './baners/Operation3.jpg'
import Operation4 from './baners/Operation4.jpg'

const eventos = [
    {
        id: 1,
        title: 'Evento1',
        image: Operation1,
        text: "¡¡¡Vamos!!! inscribete con tus amigos y usen todas sus habilidades para ganar grandes recompensas. ",
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },

    {
        id: 2,
        title: 'Evento2',
        image: Operation2,
        text: "¡¡¡Vamos!!! inscribete con tus amigos y usen todas sus habilidades para ganar grandes recompensas. ",
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },

    {
        id: 3,
        title: 'Evento3',
        image: Operation3,
        text: "¡¡¡Vamos!!! inscribete con tus amigos y usen todas sus habilidades para ganar grandes recompensas. ",
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 4,
        title: 'Evento4',
        image: Operation4,
        text: "¡¡¡Vamos!!! inscribete con tus amigos y usen todas sus habilidades para ganar grandes recompensas. ",
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
 
]


function Eventos() {
    return (
        <div className="Eventos">
            <div className="Titulo3"><h1 className="text-center" id="Titulo">Eventos</h1></div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row"> 
                    {
                        eventos.map( (eventos) => (
                            <div className="col-md-3" key={eventos.id}>
                                <Evento title={eventos.title} imageSource={eventos.image} url={eventos.url} text={eventos.text}/>
                            </div>                           
                        ))
                    }
                </div>
                
            </div>
        </div>

    )
}

export default Eventos