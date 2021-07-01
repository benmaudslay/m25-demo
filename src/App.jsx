import "./App.css";
import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

const App = () => {
  const [items, setItems] = useState(["eggs", "flour", "milk"]);

  const handleItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemove = (itemIndex) => {
    let newArray = [...items];
    newArray.splice(itemIndex, 1);
    setItems(newArray);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>To Do App</h1>
        <p>Add your todo's in the input below!</p>
      </div>

      <div className="wrapper">
        <Form submitFunction={handleItem} />

        {items.length > 0 && <List items={items} handleRemove={handleRemove} />}
      </div>
    </div>
  );
};

export default App;
