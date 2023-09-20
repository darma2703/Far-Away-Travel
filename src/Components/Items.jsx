import PropTypes from "prop-types";

export default function Items({
  quantity,
  descriptions,
  packed,
  itemId,
  handleDeleteItem,
  handleChecked,
}) {
  return (
    <li>
      <input
        type="checkbox"
        name="checkBox"
        id="checkBox"
        checked={packed}
        onChange={() => handleChecked(itemId)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {descriptions}
      </span>
      <button onClick={() => handleDeleteItem(itemId)}>X</button>
    </li>
  );
}

Items.propTypes = {
  quantity: PropTypes.number,
  descriptions: PropTypes.string,
  packed: PropTypes.bool,
  itemId: PropTypes.number,
  handleDeleteItem: PropTypes.func,
  handleChecked: PropTypes.func,
};
