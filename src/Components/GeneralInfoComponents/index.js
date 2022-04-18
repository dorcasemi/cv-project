import React from "react";
import "./index.css";

const GeneralInfoComponents = () => {
  return (
    <>
      <div class="mainContainer">
        <h2>GENERAL INFORMATION</h2>

        <form class="cvForm">

          <div className="field">
            <input type="text" placeholder="Full name" />
          </div>
          
          <div className="field">
            <input type="text" placeholder="Phone Number" />
          </div>
          

          <div className="field">
            <input type="text" placeholder="Email Address" />
          </div>
          
          <div className="field">
            <input type="text" placeholder="Residential Address" />
          </div>

        <div className="birthDate">
        <input type="date"/>
        

        </div>
        </form>

        <div className="navBtn">
         <button className="btnTop1">Submit</button>
        </div>
        <div>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          </div>
       
       

      </div>
    </>
  );
};

export default GeneralInfoComponents;
