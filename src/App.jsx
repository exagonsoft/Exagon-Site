import { BrowserRouter} from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import './styles/ex-styles.css'
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import { ToastNotification } from "./messages/notificationsHandler";

const  App = () => {
  return (
    <BrowserRouter>
    <ToastNotification />
    <div className="relative z-0 bg-primary">
      <div className=" bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Achievements />
      <Feedbacks />
      <div className=" relative z-0">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
