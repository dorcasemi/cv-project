import React from "react";
import "./index.css";

const EducationalExperienceComponents = () => {
  return (
    <>
      <div class="eduMainContainer">
        <h2>EDUCATIONAL EXPERIENCE</h2>

        <form class="eduCvForm">

          <div className="eduField">
            <input  type="text" placeholder="Name Of School" />
          </div>
          
          <div className="eduField">
            <input  type="text" placeholder="Faculty/Department" />
          </div>
          

          <div className="eduField">
            <input  type="text" placeholder="Course of Study" />
          </div>
          
          <div className="eduField">
            <input  type="text" placeholder="Degree Acquired" />
          </div>

        <div className="subContainer">
         
        <div className="birthDate">
        <input type="date"/>
        </div>

        <div className="degreeDiv">
          <input type="radio" value="Bsc"  /> Bsc
          <input type="radio" value="HND"  /> HND
          </div>

        </div>

        <div className="eduSubmitBtn">
         <button className="eduBtnBottom">Submit</button>
        </div>

          </form>

         
       
       

      </div>
    </>
  );
};

export default EducationalExperienceComponents;
