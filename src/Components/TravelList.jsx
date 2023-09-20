import { useState } from "react";
import Items from "./Items";
import PropTypes from "prop-types";
export const PackingList = ({
  item,
  handleDeleteItem,
  handleChecked,
  onClear,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = item;

  if (sortBy === "description") {
    sortedItems = item.slice().sort((a, b) => {
      return a.descriptions.localeCompare(b.descriptions);
    });
  }

  if (sortBy === "packed") {
    sortedItems = item.slice().sort((a, b) => {
      return a.packed - b.packed;
    });
  }

  // why using slice in here ?
  // because we don't want to mutate the original array
  // we want to create a new array and sort it
  // if we don't use slice, we will mutate the original array
  // and the original array will be sorted
  // and we don't want that

  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Items
            key={items.id}
            quantity={items.quantity}
            descriptions={items.descriptions}
            packed={items.packed}
            itemId={items.id}
            handleDeleteItem={handleDeleteItem}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
      {/* add the sorting algorithm and clear list feature */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input order</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed status</option>
        </select>
        <button className="clear" onClick={() => onClear()}>
          Clear
        </button>
      </div>
    </div>
  );
};

PackingList.propTypes = {
  item: PropTypes.array,
  handleChecked: PropTypes.func,
  handleDeleteItem: PropTypes.func,
  onClear: PropTypes.func,
  onSort: PropTypes.func,
};
