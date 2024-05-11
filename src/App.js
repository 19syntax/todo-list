import { useState } from "react";

const initialItems = ["Eat pizza", "Drink water", "Fry fish"];
function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleAddList(items) {
    setList((item) => [...item, items]);
  }

  function handleDeleteList(id) {
    const updatedList = [...list];
    updatedList.splice(id, 1);
    setList(updatedList);
  }

  return (
    <div>
      <Header />
      <Input
        item={item}
        setItem={setItem}
        setList={setList}
        onAddList={handleAddList}
      />
      <ListItem list={list} onDeleteList={handleDeleteList} />
    </div>
  );
}

export default App;

function Header() {
  return <h1 class="header">Todo Input📃</h1>;
}

function Input({ item, setItem, onAddList }) {
  function handleClick(e) {
    e.preventDefault();

    if (!item) return;
    const newItem = { item };

    onAddList(newItem);
    setItem("");
  }

  return (
    <div class="input">
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter a new Task"
      />
      <button onClick={handleClick}>ADD TASK</button>
    </div>
  );
}

function ListItem({ list, onDeleteList }) {
  return (
    <div class="task">
      <ul>
        {list.map((value, id) => (
          <NewItem value={value} id={id} onDeleteList={onDeleteList} />
        ))}
      </ul>
    </div>
  );
}

function NewItem({ value, id, onDeleteList }) {
  return (
    <div class="newItem">
      <input type="checkbox" />
      <li>{value.item}</li>
      <button onClick={() => onDeleteList(id)}>❌</button>
    </div>
  );
}
