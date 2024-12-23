
import './homePage.css';
import doctors from '../../assets/image/doctors.jpg';
import { Link } from "react-router-dom";



function about() {
 

  return (
    <div className="about">
        <img src={doctors} alt="Example" />
        <div className="about-content">
          <h6>About US</h6>
          <h1>
            World-class Preventive,<br/>
            Prescriptive & Curative<br/>
            Medical Practices</h1>
          <p>Being in the healthcare sector, we consider it our paradigm duty<br/>
            to ensure Safety of our patients, effectiveness of our treatments,<br/>
            transparency in our practices, and absolute timely care.</p>
            <Link to="/doctor"><button className="buttonBook">Contact US</button></Link>
        </div> 
      </div> 
  );
}

export default about;