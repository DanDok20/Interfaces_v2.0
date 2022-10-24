import React from 'react';
import "./components/ContactUs.css";
/* import { FaRegEnvelope, FaPhoneAlt, FaGlobe, FaMapPin } from "react-icons/fa" */

function ContactUs() {
  return (
    <div className="ContactPage">
      <div className="formulary-bg">
        <h1 className="title-details"> Contactanos </h1>
          <p className="description"> 
            Nos puedes mandar un mensaje por este medio 
            <br></br> para solucionar inquietudes que tengas. 
            <br></br> O tambien, por si tienes una sugerencia de
            <br></br> la pagina, o avistamiento de un bug.
            <br></br><br></br> El plazo maximo para la respuesta será de 48 horas. 
          </p>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <p className="developer-info"> hello@reallygreatsite.com </p>
          <p className="developer-info"> +123-456-7890 </p>
          <p className="developer-info"> reallygreatsite.com </p>
          <p className="developer-info"> Cali, Colombia </p>
            
      </div>
      <p className="question-descriptions" required> Usuario (*)       <input className="question-box-design"></input> </p>
      <p className="question-descriptions" required> Email (*)         <input className="question-box-design"></input> </p>
      <p className="question-descriptions"> Breve descripción (*)      <input className="question-box-design"></input> </p>
      <p className="question-descriptions"> Como supiste de nosotros?  <select className="select-box-design">
                <option className="blackcolor4optiontext" disabled selected hidden>Elige una opción...</option>
                <option className="blackcolor4optiontext">Opción N°1</option>
                <option className="blackcolor4optiontext">Opción N°2</option>
                <option className="blackcolor4optiontext">Opción N°3</option>
                </select> </p>
      <p className="question-descriptions" required> Mensaje (*): <textarea className="message-box-design" placeholder="Escribe tu mensaje aquí..."></textarea> </p>
      <sendButton> Enviar </sendButton>
    </div>
  );
}

export default ContactUs;