import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import IProjects from "./components/interface/IProjects";
import IResume from "./components/interface/IResume";
import { getProfile } from "./service/Service";
interface IApp {
  infor: {};
  resume: IResume;
  projects: IProjects[] | [];
}

const App: React.FC = () => {

  const [resumeData, setResumeData] = useState<IApp>({} as IApp);
  const getResumeData = async () => {
    // $.ajax({
    //   url: "./resumeData.json",
    //   dataType: "json",
    //   cache: false,
    //   success: function (data) {
    //     setResumeData(data);
    //   },
    //   error: function (xhr, status, err) {
    //     console.log(err);
    //     alert(err);
    //   }
    // });
    setResumeData(await getProfile<IApp>("1", {}));
  }

  useEffect(() => {
    getResumeData();
  }, [])

  return (
    <>
      <div className="App">
        <Header data={resumeData.infor} />
        <About data={resumeData.infor} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.projects} />
        <Contact data={resumeData.infor} />
        <Footer data={resumeData.infor} />
      </div>
    </>
  );
}

export default App;

