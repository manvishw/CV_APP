// eslint-disable-next-line react/prop-types
const BTN = ({ click }) => {
  return (
    <div className="btn-class">
      <h3>Succeesfully Saved</h3>
      <button
        onClick={() => {
          click(true);
        }}
        id="edit"
      >
        Edit
      </button>
    </div>
  );
};

export default BTN;
