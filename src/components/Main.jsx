import "../style/main.css";
import GeneralInfo from "./GeneralInfo";
import BuildView from "./BuildView";
import EducationInfo from "./EducationInfo";
import PracticalInfo from "./PracticalInfo";
import { useState } from "react";
import BTN from "./BTN";

const Main = () => {
  const [generalData, setGeneralData] = useState({});
  const [generalDisplay, setGeneralDisplay] = useState(true);

  const [educationData, setEducationData] = useState({});
  const [educationDisplay, setEducationDisplay] = useState(true);

  const [practicalData, setPracticalData] = useState({});
  const [practicalDisplay, setPracticalDisplay] = useState(true);

  return (
    <main>
      <div className="user">
        {generalDisplay ? (
          <GeneralInfo save={setGeneralData} afterSave={setGeneralDisplay} />
        ) : (
          <BTN click={setGeneralDisplay} />
        )}

        {educationDisplay ? (
          <EducationInfo
            save={setEducationData}
            afterSave={setEducationDisplay}
          />
        ) : (
          <BTN click={setEducationDisplay} />
        )}
        {practicalDisplay ? (
          <PracticalInfo
            save={setPracticalData}
            afterSave={setPracticalDisplay}
          />
        ) : (
          <BTN click={setPracticalDisplay} />
        )}
      </div>
      <BuildView 
        generalData={generalData}
        educationData={educationData}
        practicalData={practicalData}
      />
    </main>
  );
};

export default Main;
