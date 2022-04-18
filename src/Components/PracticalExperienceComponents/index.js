import React from "react";
import "./index.css";

const PracticalExperienceComponents = () => {
  return (
    <>
      <div class="practMainContainer">
        <h2>PRACTICAL EXPERIENCE</h2>

        <form class="practCvForm">

          <div className="practField">
            <input  type="text" placeholder="Name Of Company" />
          </div>
          
          <div className="practField">
            <input  type="text" placeholder="Job Title" />
          </div>
          

          <div className="practField">
            <input  type="text" placeholder="Title of Position Held" />
          </div>
          
          <div >
            <textarea className="practTextarea" type="text" placeholder="Job Description/ Terms of Reference"  />
          </div>
          <h6>Select the Date From when you started and when you stopped working for the company. </h6>

        <div className="subContainer">
         
        <div className="practBirthDate">
        <input type="date" placeholder="Start"/>
        </div>

        <div className="practBirthDateRight">
        <input type="date" placeholder="End"/>
        </div>

        
        </div>

        <div className="practSubmitBtn">
         <button className="practBtnBottom">Submit</button>
        </div>

          </form>

         
       
       

      </div>
    </>
  );
};

export default PracticalExperienceComponents;
