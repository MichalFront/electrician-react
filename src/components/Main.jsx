import React from "react";
import '../css/Main.css'
import logo from '../img/logoAbout.jpg'

function MainBox(){
  return(
    <div>
        <div className="main_box">
          <div className="main_boxcenter">
            {/* <div className="main_boxCin"> */}
              {/* <img src={logo} alt="logoAbout"></img> */}
            {/* </div> */}
            <div className="main_boxCin">
              <div className="main_box_info1">
                <span className="main_text1">"Kostek"</span><br/>
                <span className="main_text2">Instalatorstwo Elektryczne</span><br/>
                <span className="main_text3">Dariusz Zawadzki</span>
              </div>
              <div className="main_box_info2">
              <button className="main_button"><span className="main_buttonSpan">Oferta</span></button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MainBox;