import { useState } from "react";
import PropTypes from "prop-types"; // ES6
export const Forms = ({ setItem }) => {
  const [descriptions, setDescriptions] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSelect = (e) => {
    e.preventDefault();
    setQuantity(Number(e.target.value));
  };

  const handleItemInputChange = (e) => {
    e.preventDefault();
    setDescriptions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // create the random id using date object
    const id = new Date().getTime();

    if (descriptions) {
      setItem((prevItems) => [
        ...prevItems,
        { quantity, descriptions, packed: false, id },
      ]);
      setQuantity(Number(1));
      setDescriptions("");
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you 😍 Trip ? </h3>
      <select value={quantity} onChange={handleSelect}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name=""
        value={descriptions}
        id="itemsName"
        placeholder="Items..."
        onChange={handleItemInputChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

Forms.propTypes = {
  item: PropTypes.array,
  setItem: PropTypes.func,
};
