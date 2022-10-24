import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Zaid() {
  return ( 
  <div>
      <div class="main">
        <div class="container">
          <div class="heading">
            <h1 class="asim">
              <u>
                <i>"ZAID's RESUME"</i>
                <br />
              </u>{" "}
            </h1>
            <img
              src="https://raw.githubusercontent.com/zaidasim2197/Zaid-Resume-Flex/main/images/zaid-removebg-preview.png"
              alt="left"
              width={115}
            />
            <h3>
              <u class="zaid">CONTACT INFO: </u>
            </h3>
            <ul>
              <li>Address: FB Area Block/15 karachi</li>
              <br />
              <li>Phone No: 0325-2997073 </li>
              <br />
              <li>E-Mail: zaidbinasim2197@gmail.com </li>
              <br />
            </ul>
            <ul>
              <h3 class="bin">
                <u>LANGUAGES:</u>
              </h3>
              <li> English </li>
              <li> Urdu </li>
            </ul>
          </div>
        </div>
        <div class="container2">
          <p>
            <b>
              {" "}
              <u>MY CAREER OBJECTIVE:</u>
            </b>
          </p>
          <p>
            To secure a challenging position in company to enhance my learnings,
            knowledge, and skills.
          </p>
          <p>
            <b>
              {" "}
              <u>MY EDUCATION:</u>
            </b>
          </p>
          <ol>
            <li>
              <i>
                <u>SCHOOL:</u>
              </i>
              <a>The Crescent Academy</a>
            </li>
            <li>
              <i>
                <u>COLLEGE:</u>
              </i>
              <a>Bahria College</a>
            </li>
            <li>
              <i>
                <u>UNIVERSITY:</u>
              </i>
              <a>SIR SYED UNIVERSITY</a>
            </li>
          </ol>
          <p>
            <b>
              <u>MY SKILLS:</u>
            </b>
          </p>
          <ol>
            <li>Active Listening.</li>
            <li>programming.</li>
            <li>Communication.</li>
            <li>Computer Skills.</li>
            <li>Problem Solving Skills.</li>
            <li>Management Skills.</li>
            <li>Time Management.</li>
          </ol>
          <p>
            <b>
              <u>WORK EXPERIENCE:</u>
            </b>
          </p>
          <p> Fresh Candidate (Undergraduate)</p>
          <p>
            <b>
              <u>MY ACTIVITIES:</u>
            </b>
          </p>
          <ol>
            <li>Sports.</li>
            <li>Reading books.</li>
            <li>Painting.</li>
            <li>Learning Other Languages.</li>
            <li>Participation in competitions.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Zaid />, document.querySelector("#root"));
