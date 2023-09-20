import React, { useState } from "react";
import { Logo } from "./Components/Logo";
import { PackingList } from "./Components/TravelList";
import { Stats } from "./Components/Stats";
import { Forms } from "./Components/Forms";

function App() {
  const [items, setItem] = useState([]);
  console.log("🚀 ~ file: App.jsx:9 ~ items:", items);

  function onDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleCLeared() {
    setItem([]);
  }
  // handle check box checked
  function handleChecked(id) {
    setItem((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  }

  return (
    <React.Fragment>
      <div className="app">
        <Logo />
        <Forms item={items} setItem={setItem} />
        <PackingList
          item={items}
          handleDeleteItem={onDeleteItem}
          handleChecked={handleChecked}
          onClear={handleCLeared}
        />
        <Stats item={items} />
      </div>
    </React.Fragment>
  );
}

export default App;
