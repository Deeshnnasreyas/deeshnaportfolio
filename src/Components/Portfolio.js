import React, { useState,useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const Portfolio = ({ data }) => {
  const [imageUrl, setimageUrl] = useState(null);
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img
                alt={projects.title}
                src={projectImage}
                style={{ cursor: "pointer" }}
              />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }
  const handleimagemodal = (value) => {
    setimageUrl(value);
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 data-aos="fade-up">Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
            data-aos="fade-up"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
