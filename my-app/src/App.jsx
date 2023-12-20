import logo from "./logo.svg";
import "./App.css";
import TextCustom, { TEXT_A, TEXT_B } from "./components/text";
import LoginPage from "./pages/auth/login/login";
import { useState } from "react";

function App() {
  return (
    <div>
      <LoginPage />
      <CountPage />
      <UserPage />
    </div>
  );
}

const CountPage = () => {
  let [count, setCount] = useState(0); // 1
  let number = 100;
  console.log("count", count);
  console.log("chay lai");
  return (
    <div>
      <h1>{count}</h1>
      <h2>{number}</h2>
      <button
        onClick={(event) => {
          // console.log(event.target);
          setCount(count + 5); //
        }}
      >
        Increment
      </button>
    </div>
  );
};

const UserPage = () => {
  let [users, setUsers] = useState([
    {
      name: "hehe1",
    },
    {
      name: "hehe2",
    },
    {
      name: "hehe3",
    },
  ]); // 1
  const [valueInput, setInputValue] = useState("");
  const [indexDelete, setIndexDelete] = useState(null);

  console.log("valueInput", valueInput);
  console.log("user", users);
  console.log("UserPage");
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
        }}
      />
      <button
        onClick={(event) => {
          setUsers([
            ...users,
            {
              name: valueInput,
            },
          ]);
        }}
      >
        Save
      </button>

      <input
        type="number"
        onChange={(e) => {
          const value = e.target.value;
          setIndexDelete(value);
        }}
      />
      <button
        onClick={(event) => {
          // setUsers();
          const newUsers = [...users];
          newUsers.splice(indexDelete, 1); // mutation
          setUsers(newUsers);
        }}
      >
        Xóa
      </button>
    </div>
  );
};

export default App;
