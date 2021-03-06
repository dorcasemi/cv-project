import React from "react";
import "./index.css";

const GeneralInfoComponents = () => {
  return (
    <>
      <div class="mainContainer">
        <h2>GENERAL INFORMATION</h2>

        <form class="cvForm">

          <div className="field">
            <input  type="text" placeholder="Full name" />
          </div>
          
          <div className="field">
            <input  type="text" placeholder="Phone Number" />
          </div>
          

          <div className="field">
            <input  type="text" placeholder="Email Address" />
          </div>
          
          <div className="field">
            <input  type="text" placeholder="Residential Address" />
          </div>

        <div className="subContainer">
         
        <div className="birthDate">
        <input type="date"/>
        </div>

        <div className="radioDiv">
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          </div>

        </div>

        <div className="submitBtn">
         <button className="btnBottom">Submit</button>
        </div>

          </form>

         
       
       

      </div>
    </>
  );
};

export default GeneralInfoComponents;
