import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Package from './Components/package';
import NoPage from './Components/NoPage';
import Education from './Components/Education';
const App = () => {
  const [profileData, setprofileData] = useState({})
  useEffect(() => {
    getData();
    console.log(profileData);
  }, [profileData])
  const getData = () => {
    fetch('/resumeData.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setprofileData(myJson);
      });
  }

  return (
    <div className="App">
      <Header data={profileData.main} />
      <About data={profileData.main} />
      <Education/>
      <Resume data={profileData.resume} />
     
      <Portfolio data={profileData.portfolio} />
     
      <Package data={profileData.npm} />
  
      <Contact data={profileData.main} />
      <Footer data={profileData.main} />
    </div>
  );
}

export default App;
