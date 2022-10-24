import React from "react";
import "./components/StartPage.css";
import {Link} from 'react-router-dom'

function StartPage() {
  return (
    <div className="StartPage">
      <div>
      <iframe width="100%" height="50%" margin="0" src="https://www.youtube.com/embed/KlbLLRdg9u8?start=39&end=103&autoplay=1&loop=1&controls=0&mute=1&playlist=KlbLLRdg9u8" title="Inside Rainbow Official Trailer – Tom Clancy's Rainbow Six Siege"></iframe>
      </div>
      
      <div className='comienzo'>
        <Link to='/foro'>
          <button>EMPEZAR</button>
        </Link>
        
        
      </div>
    </div>
  );
}

export default StartPage;