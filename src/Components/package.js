import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const Package = ({ data }) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  if (data) {
    var npm = data.package.map(function (npm) {
      return (
        <div key={npm.title}>
          <h3>
            <a href={npm.link} target="_blank" rel="">
              {" "}
              {npm.title}
            </a>
          </h3>

          <p>{npm.description}</p>
        </div>
      );
    });
  }

  return (
    <section id="npm">
      <div className="row education">
        <div className="three columns header-col">
          <h1 data-aos="fade-up">
            <span>NPM</span>
          </h1>
        </div>

        <div className="nine columns main-col" data-aos="fade-up">
          <div className="row item">
            <div className="twelve columns">{npm}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
