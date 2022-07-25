import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
interface IApp {
  user: {};
  resume: object;
  portfolio: object;
}

const App: React.FC = (props) => {

  const [resumeData, setResumeData] = useState<IApp>({} as IApp);
  const getResumeData = () => {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  useEffect(() => {
    getResumeData();

  }, [])

  return (
    <>
      <div className="App">
        <Header data={resumeData.user} />
        <About data={resumeData.user} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.user} />
        <Footer data={resumeData.user} />
      </div>
    </>
  );
}

export default App;
