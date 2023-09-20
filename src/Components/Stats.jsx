import PropTypes from "prop-types";
export const Stats = ({ item }) => {
  // percentage of packed items
  const packedItems = item.filter((item) => item.packed === true);
  const percentage = Math.round((packedItems.length / item.length) * 100);

  const totalItems = item.length;

  if (!item.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈✈"
          : ` 🎒 You have ${totalItems} items on list, and you already packed ${
              packedItems.length
            }
        (${percentage ? percentage : 0}%)`}
      </em>{" "}
    </footer>
  );
};

Stats.propTypes = {
  item: PropTypes.array,
};
