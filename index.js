import './homePage.css';
import myImage from '../../assets/image/doctorsGrp.png';
import { Link } from "react-router-dom";
function index() {
 

    return (
<div className="hero">
        <div className="hero-content">
          {/* <h3>Welcome to Medical Consultation</h3> */}
          <h1>Get Expert <span className='heading'> Medical <br /> Consultation</span></h1>
          <p>Connect with top medical professionals for consultations, diagnoses, and<br/> expert opinions, all from the comfort of your home.</p>
          <Link to="/doctorList"><button className="buttonBook">Book a Consultation</button></Link>
        </div>
        <img src={myImage} alt="Example" />
      </div>
      );
    }
    export default index;