import { useState } from "react";
import "./styles/ex-styles.css";
import MianNav from "./components/navbar/nav.jsx";
import Welcome from "./components/wellcome/Welcome";
import About from "./components/about/About";
import MyWorks from "./components/myworks/MyWorks";
import Resume from "./components/resume/Resume";
import MyAchievements from "./components/achievements/MyAchievements";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper relative min-h-screen w-full bg-grey blurredBg">
        <MianNav />
        <main className="page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter">
          <div className="bglines fixed left-0 top-0 z-20 flex h-screen w-full justify-around">
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
            <span className="border-r border-white border-opacity-5"></span>
          </div>
          <div className="sitedata relative z-30 min-h-screen">
            <Welcome />
            <About />
            <Resume />
            <MyWorks />
            <MyAchievements />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
