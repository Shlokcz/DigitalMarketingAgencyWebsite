import './App.css';
import Home from "./components/Homepage/home";
import Services from './components/Whatwedopage/services';
import Chooseus from './components/WhyChooseUs/chooseus';
import Project from './components/OurProject/project';
import Growth from './components/ExpertsGrowth/growth';
import Feedback from './components/CustomersFeedback/feedback';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Chooseus />
      <Project />
      <Growth />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
