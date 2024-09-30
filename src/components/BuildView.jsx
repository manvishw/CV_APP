/* eslint-disable react/prop-types */
import "../style/buildview.css";

// eslint-disable-next-line react/prop-types
const BuildView = ({ generalData, educationData, practicalData }) => {
  return (
    <div className="build-view">
      <div className="general">
        <h1>{generalData.name}</h1>
        <hr />
        <p>Email:{generalData.email}</p>
        <p>Mobile Number:{generalData.number}</p>
      </div>
      <div className="education">
        <h1>Educational Information</h1>
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
