
import './homePage.css';
import doc from "../../assets/image/docotrNurse.png";



function specialities() {
 

  return (
    <div className="Specialities">
    <h2>Our Speciality</h2>
    <h6>we provide the World class service with <br/> The best medical team</h6>
    <div className="Specialty">
      <img src={doc} alt="Specialty"/>
      <h3>dentistry</h3>
      <p>Get Consultation from our dentistry team</p>
    </div>
    <div className="Specialty">
    <img src={doc} alt="Specialty"/>

    <h3>General diagnosis</h3>
      <p>Get Consultation from our General diagnosis team</p>
    </div>
    <div className="Specialty">
    <img src={doc} alt="Specialty"/>

    <h3>Neuro Surgery</h3>
      <p>Get Consultation from our Neuro Surgery team</p>
    </div>
    <div className="Specialty">
    <img src={doc} alt="Specialty"/>

      <h3>Cardiology</h3>
      <p>Get Consultation from our Cardiology team</p>
    </div>
    <div className="Specialty">
    <img src={doc} alt="Specialty"/>

    <h3>Pharmecy</h3>
      <p>Get Consultation from our Pharmecy team</p>
    </div>
    <div className="Specialty">
    <img src={doc} alt="Specialty"/>
    <h3>Trained Staff</h3>
      <p>Get Consultation from our Trained Staff team</p>
    </div>
    <div className="Specialty">
    <img src={doc} alt="Specialty"/>
      <h3>DNA Mapping</h3>
      <p>Get Consultation from our DNA Mapping team</p>
    </div>
    <div className="Specialty">
      <img src={doc} alt="Specialty"/>
    <h3>Ophthalmology</h3>
      <p>Get Consultation from our Ophthalmology team</p>
    </div>
    <div className="Specialty">
    <img src={doc} alt="Specialty"/>
    <h3>Medical Aid</h3>
      <p>Get Consultation from our Medical Aid team</p>
    </div>
  </div>
  
  );
}

export default specialities;