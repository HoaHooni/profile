import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
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
