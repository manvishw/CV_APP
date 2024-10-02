import "../style/general-info.css";

const GeneralInfo = (data) => {
  function getTargetData(target) {
    return {
      name: target[0].value,
      email: target[1].value,
      number: target[2].value,
    };
  }

  return (
    <form
      className="general-info"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="name">
        Enter Your Name
        <input type="text" name="name" id="name" placeholder="Ramesh" />
      </label>
      <label htmlFor="email">
        Enter Your Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
        />
      </label>
      <label htmlFor="number">
        Enter Your Phone Number
        <input
          type="number"
          name="number"
          id="number"
          placeholder="0123456789"
        />
      </label>
      <div className="btn-class">
        <button
          onClick={async (e) => {
            const setOBJ = await getTargetData(e.target.form);
            await data.save(setOBJ);
            await data.afterSave(false);
          }}
          id="save"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default GeneralInfo;
