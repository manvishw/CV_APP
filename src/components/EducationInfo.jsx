import "../style/educationInfo.css";

const EducationInfo = (data) => {
  function getTargetData(target) {
    return {
      schoolName: target[0].value,
      course: target[1].value,
      admissionDate: target[2].value,
    };
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="education-info"
    >
      <label htmlFor="school-name">
        Enter Your School/Collage Name
        <input type="text" name="school-name" id="school-name" />
      </label>
      <label htmlFor="course">
        Enter Your Course
        <input type="text" name="course" id="course" />
      </label>
      <label htmlFor="admission-date">
        Write down Admission Date
        <input type="date" name="admission-date" id="admission-date" />
      </label>
      <div className="btn-class">
        <button
          id="save"
          type="submit"
          onClick={async (e) => {
            const setOBJ = await getTargetData(e.target.form);
            await data.save(setOBJ);
            await data.afterSave(false);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EducationInfo;
