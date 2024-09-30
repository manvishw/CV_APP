import "../style/practicalInfo.css";

const PracticalInfo = (data) => {
  function getTargetData(target) {
    return {
      companyName: target[0].value,
      profession: target[1].value,
      joinDate: target[2].value,
    };
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="practical-info"
    >
      <label htmlFor="company-name">
        Enter Company Name
        <input type="text" name="company-name" id="company-name" />
      </label>
      <label htmlFor="profession">
        Profession
        <input type="text" name="profession" id="profession" />
      </label>
      <label htmlFor="joining-date">
        Joining Date
        <input type="date" name="joining-date" id="joining-date" />
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

export default PracticalInfo;
