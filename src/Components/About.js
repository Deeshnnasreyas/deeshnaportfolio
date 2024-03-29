import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const About = ({ data }) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }
  const onButtonClick = () => {
    const pdfUrl = "sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "sample.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about">
      <div className="row">
        <div className="three columns" data-aos="fade-up">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Tim Baker Profile Pic"
          />
        </div>
        <div className="nine columns main-col" data-aos="fade-up">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button" download>
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
