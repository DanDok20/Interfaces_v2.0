import React from "react";
import Agent from "./Agent";
import './components/Agents.css'

import agent1 from './agents/agent1.jpg'
import agent2 from './agents/agent2.jpg'
import agent3 from './agents/agent3.jpg'
import agent4 from './agents/agent4.jpg'
import agent5 from './agents/agent5.jpg'
import agent6 from './agents/agent6.jpg'
import agent7 from './agents/agent7.jpg'
import agent8 from './agents/agent8.jpg'
import agent9 from './agents/agent9.jpg'
import agent10 from './agents/agent10.jpg'
import agent11 from './agents/agent11.jpg'
import agent12 from './agents/agent12.jpg'
import agent13 from './agents/agent13.jpg'
import agent14 from './agents/agent14.jpg'
import agent15 from './agents/agent15.jpg'
import agent16 from './agents/agent16.jpg'

const atacantes = [
    {
        id: 1,
        name: 'GRIM',
        image: agent1,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 2,
        name: 'SENS',
        image: agent2,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 3,
        name: 'OSA',
        image: agent3,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 4,
        name: 'FLORES',
        image: agent4,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 5,
        name: 'ZERO',
        image: agent5,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 6,
        name: 'ACE',
        image: agent6,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 7,
        name: 'IANA',
        image: agent7,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 8,
        name: 'KALI',
        image: agent8,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
 
]

const defensores = [
    {
        id: 9,
        name: 'AZAMI',
        image: agent9,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 10,
        name: 'THORN',
        image: agent10,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 11,
        name: 'THUNDERBIRD',
        image: agent11,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 12,
        name: 'ARUNI',
        image: agent12,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 13,
        name: 'MELUSI',
        image: agent13,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 14,
        name: 'ORYX',
        image: agent14,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 15,
        name: 'WAMAI',
        image: agent15,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 16,
        name: 'GOYO',
        image: agent16,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
 
]


function Agents() {
    return (
        <div className="Agents">
            <div className="Titulo1"><h1 className="text-center" id="Titulo">Atacantes</h1></div>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row"> 
                    {
                        atacantes.map( (atacantes) => (
                            <div className="col-md-3" key={atacantes.id}>
                                <Agent name={atacantes.name} imageSource={atacantes.image} url={atacantes.url}/>
                            </div>                           
                        ))
                    }
                </div>
            </div>
            <div className="Titulo2"><h1 className="text-center" id="Titulo">Defensores</h1></div>
            <hr></hr>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row"> 
                    {
                        defensores.map( (defensores) => (
                            <div className="col-md-3" key={defensores.id}>
                                <Agent name={defensores.name} imageSource={defensores.image} url={defensores.url}/>
                            </div>                           
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Agents