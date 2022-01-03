import "./join_body.css";
import React, { useState, useRef } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import contact_img from './contact_image.jpeg';

const Join_body = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const softwareOtherRef = useRef(null);
  const langOtherRef = useRef(null);
  const refOtherRef = useRef(null);
  const joinFormRef = useRef(null);
  const [softwareOther, setSoftwareOther] = useState('');
  const [langOther, setLangOther] = useState('');
  const [refOther, setRefOther] = useState('');
  const [workPostResponse, setWorkPostResponse] = useState('');
  const [joinPostResponse, setJoinPostResponse] = useState('');
  const [workSubmitted, setWorkSubmitted] = useState(true);
  const [joinSubmitted, setJoinSubmitted] = useState(false);

  const [workFormData, setWorkFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "OneLoop Work With Us Inquiry"
  });

  const [joinFormData, setJoinFormData] = useState({
    name: "",
    email: "",
    year: "",
    major: "",
    gpa: "",
    hours_to_commit: "",
    subteams_interested: [],
    ranking: "",
    software_familiar: [],
    programming_languages_familiar: [],
    reference: [],
    resume: "",
    subject: "OneLoop Application"
  });

  const workHandleChange = (e) => {
    setWorkFormData({
      ...workFormData,

      [e.target.name]: e.target.value,
    });
  };

  const workHandleSubmit = async(e) => {
    e.preventDefault();

    if(!executeRecaptcha) {
      // console.log("Execute recaptcha not yet available");
      setWorkPostResponse('reCAPTCHA has not finished initializing; please wait a few moments before submitting');
      setWorkSubmitted(true);
      return;
    }
    workFormData.token = await executeRecaptcha();

    // POST request to server:
    const res = await fetch('/api/work-with-us', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workFormData)
    });
    const response = await res.json();
    const message = response.message;
    setWorkPostResponse(message);
    setWorkSubmitted(true);
    if (message == 'Email sent!') {
      setWorkFormData({
        name: "",
        email: "",
        message: "",
        subject: "OneLoop Work With Us Inquiry"
      });
    }
  };

  const joinHandleChange = (e) => {
    // console.log(e.target.name);
    setJoinFormData({
      ...joinFormData,

      [e.target.name]: e.target.value,
    });
    // console.log(joinFormData);
  };

  const joinHandleCheckboxChange = (e) => {
    let str = e.target.name;
    // console.log(str);/
    let arr = joinFormData[str];
    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      let idx = arr.indexOf(e.target.value);
      if (idx > -1) {
        arr.splice(idx, 1);
      }
    }
    setJoinFormData({
      ...joinFormData,

      [e.target.name]: arr,
    });
    // console.log(joinFormData);
  }

  const joinHandleOtherChange = (e) => {
    // console.log(e.target.name);
    if (e.target.value) {
      // console.log(softwareOtherRef.current.checked);
      switch(e.target.name) {
        case "software_familiar":
          softwareOtherRef.current.checked = true;
          setSoftwareOther(e.target.value);
          break;
        case "programming_languages_familiar":
          langOtherRef.current.checked = true;
          setLangOther(e.target.value);
          break;
        case "reference":
          refOtherRef.current.checked = true;
          setRefOther(e.target.value);
          break;
      }
      setSoftwareOther(e.target.value);
    } else {
      switch(e.target.name) {
        case "software_familiar":
          softwareOtherRef.current.checked = false;
          setSoftwareOther('');
          break;
        case "programming_languages_familiar":
          langOtherRef.current.checked = false;
          setLangOther('');
          break;
        case "reference":
          refOtherRef.current.checked = false;
          setRefOther('');
          break;
      }
    }
  }

  const joinHandleFileChange = (e) => {
    // console.log(e.target.files[0]);
    setJoinFormData({
      ...joinFormData,

      [e.target.name]: e.target.files[0],
    });
    // console.log(joinFormData);
  }

  const joinHandleSubmit = async(e) => {
    e.preventDefault();

    if(!executeRecaptcha) {
      // console.log("Execute recaptcha not yet available");
      setJoinPostResponse('reCAPTCHA has not finished initializing; please wait a few moments before submitting');
      setJoinSubmitted(true);
      return;
    }
    joinFormData.token = await executeRecaptcha();

    if (softwareOtherRef.current.checked) {
      let arr = joinFormData.software_familiar;
      arr.push(softwareOther);
      setJoinFormData({
        ...joinFormData,

        software_familiar: arr,
      })
    }
    if (langOtherRef.current.checked) {
      let arr = joinFormData.programming_languages_familiar;
      arr.push(langOther);
      setJoinFormData({
        ...joinFormData,

        software_familiar: arr,
      })
    }
    if (refOtherRef.current.checked) {
      let arr = joinFormData.reference;
      arr.push(refOther);
      setJoinFormData({
        ...joinFormData,

        software_familiar: arr,
      })
    }
    
    let form = new FormData();
    for (const prop in joinFormData) {
      if (Array.isArray(joinFormData[prop])) {
        // for (const item in joinFormData[prop]) {
        //   console.log(joinFormData[prop][item]);
        //   form.append(prop, item);
        // }
        joinFormData[prop].forEach(val => {
          // console.log(val);
          form.append(prop, val);
        })
      } else {
        form.append(prop, joinFormData[prop]);
      }
    }
    
    // POST request to server:
    const res = await fetch('/api/join-us', {
      method: 'POST',
      body: form
    });
    const response = await res.json();
    const message = response.message;
    setJoinPostResponse(message);
    setJoinSubmitted(true);
    if (message == 'Application sent!') {
      setJoinFormData({
        name: "",
        email: "",
        year: "",
        major: "",
        gpa: "",
        hours_to_commit: "",
        subteams_interested: [],
        ranking: "",
        software_familiar: [],
        programming_languages_familiar: [],
        reference: [],
        resume: "",
        subject: "OneLoop Application"
      });
      joinFormRef.current.reset();
    }
  };

  return (
    <React.Fragment>

    <div className="oneloop-joinus-topcontainer">
      <div className="oneloop-joinus-title"> <h1 className="contact_title"> Contact Us </h1> </div>
      <div className="Con_image">
            <img src={contact_img} className="contact_images"/><br />
      </div>
      <div className="oneloop-joinus-heading25"> INTERESTED IN GAINING HANDS-ON EXPERIENCE? JOIN THE TEAM! </div>
      <p className="disclaimer"><i>(Click on options below to fill out appropriate form)</i></p>
    </div>
    
    <div className="oneloop-joinus">
      <h2 className="oneloop-joinus-heading1"> 
        <a href='#workwithus'className="join_link"> 
          Work with Us 
        </a>  
        | 
        <a href='#joinus'className="join_link"> 
          Join Us  
        </a> 
      </h2>
    </div>

    <div className="oneloop-joinus-contact" section id = 'workwithus'>
      <form onSubmit={workHandleSubmit}>
        <div className="joinus-contact">
          <label for="name"> Name:<br /></label>
          <br /><input value={workFormData.name} type="text" id="name" name="name"className="contact_form" onChange={workHandleChange} required></input>
          <br /><label for="email"> Email:<br /></label>
      
          <br /><input value={workFormData.email} type="email" id="email" name="email"className="contact_form" pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' onChange={workHandleChange} required></input>

          <br /><label for="Message">Message:<br /></label>
          <br></br>
          <textarea value={workFormData.message} name="message" className="Apply_message1" placeholder="Type message here" onChange={workHandleChange} required></textarea>
        </div>
        <input type="submit" value="Submit" className="JoinUs_button" />
      </form>
      <p style={{ display: workSubmitted ? "block" : "none" }}>{ workPostResponse }</p>
    </div>

    <div className = "oneloop-joinus-section" section id = 'joinus' > 
      <div className="oneloop-joinus-basic-qualifications">
        <h2 className="oneloop-joinus-heading1"> Basic Qualifications </h2>
        <li> Currently pursuing an undergraduate or graduate degree at UC Davis </li>
        <li> $40/year dues </li>
        <li> 4hr/week minimum commitment (weekly subteam meetings and individual projects) </li>
        <li> Accountable for projects assigned by leads and willing to learn; proactive </li>
      </div>

      <div className="oneloop-joinus-application">
          <h2 className="oneloop-joinus-applicationtitle"> OneLoop New Member Application </h2>
          <body>
            <form onSubmit={joinHandleSubmit} ref={joinFormRef}>
              <div className="Application">
                <div className="oneloop-joinus-application-row1">

                  <div className="oneloop-joinus-application-name">
                    <label for="name" className="form_inputs"><b>Name:</b></label>
                    <div className="oneloop-joinus-application-namebox">
                      <input type="text" id="name" name="name" className="apply_input" value={joinFormData.name} onChange={joinHandleChange} required></input><br />
                    </div>
                  </div>
              
                  <div className="oneloop-joinus-application-year">
                    <label for="year"className="form_inputs"><b>Year: </b></label>
                    <div className="oneloop-joinus-application-yearbox">
                      <input type="text" id="name" name="year" className="apply_input2" value={joinFormData.year} onChange={joinHandleChange} required></input><br />
                    </div>
                  </div>

                  <div className="oneloop-joinus-application-major">
                    <label for="major"className="form_inputs"><b>Major:</b></label>
                    <div className="oneloop-joinus-application-majorbox">
                      <input type="text" id="name" name="major" className="apply_input" value={joinFormData.major} onChange={joinHandleChange} required></input><br />
                    </div>
                  </div>
                </div>

                <div className="oneloop-joinus-application-row2">
                  <div className="oneloop-joinus-application-email">
                    <label for="email"className="form_inputs"><b>UC Davis Email: </b> </label>
                    <div className="oneloop-joinus-application-emailbox">
                      <input type="text" id="email" name="email" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@ucdavis.edu" className="apply_input" value={joinFormData.email} onChange={joinHandleChange} required></input><br />
                    </div>
                  </div> 

                  <div className="oneloop-joinus-application-gpa">
                      <label for="gpa"className="form_inputs"><b>GPA</b>    <i className="optional">(optional):</i><br /></label>
                    <div className="oneloop-joinus-application-gpabox">
                      <input type="text" id="email" name="gpa" className="apply_input" value={joinFormData.gpa} onChange={joinHandleChange}></input>
                    </div>
                  </div>
                </div>

                <div className="oneloop-joinus-application-resumecv">
                  <br></br>
                  <label for="resume" className="addfile"><b>Resume</b><br /> </label><br />
                  <input type="file" name="resume" accept=".pdf" onChange={joinHandleFileChange} class="addfile_button" required/>
                  <br /><br />
                  <label for="cover_letter"className="addfile"><b>Cover Letter</b><i className="optional"> (optional)</i> <br /> <br /></label>
                  <input type="file" name="cover_letter" accept=".pdf" onChange={joinHandleFileChange} class="addfile_button"/>
                  <br /><br />
                </div>

                <label for="Message" className="Q_s" >
                  How many hours a week will you be able to commit to OneLoop?
                </label>
                <br></br>
                <textarea className="Apply_message" name="hours_to_commit" value={joinFormData.hours_to_commit} onChange={joinHandleChange} required></textarea>
                <br></br>
                <div className="Question1">
                  <label for="Q1" className="Q_s">
                    Which subteams are you interested in? For more information about
                    each subteam use this link:{" "}
                  </label>

                <div>
                  <label className="apply"><i>Select all that apply</i></label>
                </div>
                
                  <input
                    type="checkbox"
                    id="subteam1"
                    name="subteams_interested"
                    value="Brakes"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="subteam1">Brakes</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="subteam2"
                    name="subteams_interested"
                    value="Business"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="subteam2">Business</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="subteam3"
                    name="subteams_interested"
                    value="Controls"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="subteam3">Controls</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="subteam4"
                    name="subteams_interested"
                    value="Power"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="subteam4">Power</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="subteam5"
                    name="subteams_interested"
                    value="Propulsion"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="subteam5">Propulsion</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="subteam6"
                    name="subteams_interested"
                    value="Stability"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="subteam6">Stability</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="subteam7"
                    name="subteams_interested"
                    value="Structures"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="subteam7">Structures</label>
                  <br></br><br />
                </div>

                <div className="Q1_space">
                  <label for="Q1_text" className="Q_s">
                    If you chose multiple subteams, rank each subteam that you have
                    chosen. 1 = most interested
                  </label><br />
                  <br></br>
                  <textarea className="Apply_message" name="ranking" value={joinFormData.ranking} onChange={joinHandleChange}></textarea>
                </div>
                <br />
                <div className="Question2">
                  <label for="Q2" className="Q_s">Software you are familiar with: </label>
                  <div className="apply"><i>Select all that apply</i></div>

                  <input
                    type="checkbox"
                    id="software1"
                    name="software_familiar"
                    value="Adobe Program"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software1">Adobe Program</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software2"
                    name="software_familiar"
                    value="Ansys Electromagnetic"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software2">Ansys Electromagnetic</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software3"
                    name="software_familiar"
                    value="Ansys Mechanical"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software3">Ansys Mechanical</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software4"
                    name="software_familiar"
                    value="Ansys Thermal"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software4">Ansys Thermal</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software5"
                    name="software_familiar"
                    value="HTML"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software5">HTML</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software6"
                    name="software_familiar"
                    value="MATLAB"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software6">MATLAB</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software7"
                    name="software_familiar"
                    value="MATLAB Simulink"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software7">MATLAB Simulink</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software8"
                    name="software_familiar"
                    value="Simens NX"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software8">Simens NX</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software9"
                    name="software_familiar"
                    value="Solidworks"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software9">Solidworks</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software10"
                    name="software_familiar"
                    value="Twincat3"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software10">Twincat3</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software11"
                    name="software_familiar"
                    value="N/A"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="software11">N/A</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="software12"
                    name="software_familiar"
                    value="other"
                    // onChange={joinHandleCheckboxChange}
                    ref={softwareOtherRef}
                    disabled={true}
                  />
                  <label for="software12" >Other:</label>

                  <input type="text" id="software12" name="software_familiar" className="Other_line" onChange={joinHandleOtherChange} />
                  <br></br>
                </div>
                <br />
                <div className="Question3">
                  <label for="Q3" className="Q_s">
                    Computer Programming Languages you are familiar with:
                  </label>
                  <div className="apply"><i>Select all that apply</i></div>

                  <input
                    type="checkbox"
                    id="Language1"
                    name="programming_languages_familiar"
                    value="Python"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="Language1">Python </label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="Language2"
                    name="programming_languages_familiar"
                    value="JavaScript"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="Language2">JavaScript </label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="Language3"
                    name="programming_languages_familiar"
                    value="Java"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="Language3">Java</label>
                  <br></br>

                  <input type="checkbox" id="Language4" name="programming_languages_familiar" value="C#" onClick={joinHandleCheckboxChange}/>
                  <label for="Language4">C#</label>
                  <br></br>

                  <input type="checkbox" id="Language5" name="programming_languages_familiar" value="C" onClick={joinHandleCheckboxChange} />
                  <label for="Language5">C</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="Language6"
                    name="programming_languages_familiar"
                    value="C++"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="Language6">C++</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="Language7"
                    name="programming_languages_familiar"
                    value="N/A"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="Language7">N/A</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="Language8"
                    name="programming_languages_familiar"
                    value="Other"
                    ref={langOtherRef}
                    disabled={true}
                  />
                  <label for="Language8">Other:</label>

                  <input type="other_text" id="Language8" name="programming_languages_familiar" className="Other_line" onChange={joinHandleOtherChange} />
                  <br></br>
                </div>
                <br />
                <div className="Question4">
                  <label for="Q4" className="Q_s">Where did you hear about us?</label>
                  <div className="apply"><i>Select all that apply</i></div>

                  <input type="checkbox" id="hear1" name="reference" value="Website" onClick={joinHandleCheckboxChange}/>
                  <label for="hear1">Website</label>
                  <br></br>
                  <input type="checkbox" id="hear2" name="reference" value="Instagram" onClick={joinHandleCheckboxChange}/>
                  <label for="hear2">Instagram</label>
                  <br></br>
                  <input type="checkbox" id="hear3" name="reference" value="Facebook" onClick={joinHandleCheckboxChange}/>
                  <label for="hear3">Facebook</label>
                  <br></br>
                  <input type="checkbox" id="hear4" name="reference" value="LinkedIn" onClick={joinHandleCheckboxChange}/>
                  <label for="hear4">LinkedIn</label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="hear5"
                    name="reference"
                    value="From another member"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="hear5">From another member</label>
                  <br></br>
                  <input type="checkbox" id="hear6" name="reference" value="Professor" />
                  <label for="hear6">Professor</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="hear7"
                    name="reference"
                    value="Recruitment Flyer"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="hear7">Recruitment Flyer</label>
                  <br></br>

                  <input type="checkbox" id="hear8" name="reference" value="Discord" />
                  <label for="hear8">Discord</label>
                  <br></br>

                  <input
                    type="checkbox"
                    id="hear9"
                    name="reference"
                    value="Tabling Event"
                    onClick={joinHandleCheckboxChange}
                  />
                  <label for="hear9">Tabling Event</label>
                  <br></br>
                  <input type="checkbox" id="hear10" name="reference" value="Other" ref={refOtherRef} disabled={true} />
                  <label for="hear10" >Other:</label>
                          <input
                    type="other_text"
                    id="hear10"
                    name="reference"
                    className="Other_line"
                    onChange={joinHandleOtherChange}
                  />

                  <br></br>
                  <br />
                </div>
              </div>
              <input type="submit" value="Submit" className="JoinUs_button"/>
              <br />
            </form>
            <p style={{ display: joinSubmitted ? "block" : "none" }}>{ joinPostResponse }</p>
          </body>
        </div>
      </div>

    
    </React.Fragment>
  );
};

export default Join_body;
