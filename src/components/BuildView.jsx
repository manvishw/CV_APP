/* eslint-disable react/prop-types */
import "../style/buildview.css";
import Email from "../assets/email.svg";
import Education from "../assets/education.svg";
import PhoneNumber from "../assets/phoneNumber.svg";

// eslint-disable-next-line react/prop-types
const BuildView = ({ generalData, educationData, practicalData }) => {
  return (
    <div className="build-view">
      <div className="general">
        <h1>{generalData.name}</h1>
        <hr />
        <div className="email">
          <img src={Email} />
          <p>{generalData.email}</p>
        </div>
        <div className="phoneNumber">
          <img src={PhoneNumber}/>
          <p>Mobile Number:{generalData.number}</p>
        </div>
      </div>
      <div className="education">
        <div id="education">
          <img src={Education}/>
        <h1>Educational Information</h1>
        </div>
        <hr />
        <div>School/Collage Name:{educationData.schoolName}</div>
        <div>Course:{educationData.course}</div>
        <div>Admission Date:{educationData.admissionDate}</div>
      </div>

      <div className="practical">
        <h1>Professional Life</h1>
        <hr />
        <div>Company Name:{practicalData.companyName}</div>
        <div>Profession:{practicalData.profession}</div>
        <div>Joining Date:{practicalData.joinDate}</div>
      </div>
    </div>
  );
};

export default BuildView;
