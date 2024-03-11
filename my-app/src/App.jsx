import { useEffect, useRef, useState } from "react";
import "./App.css";
import LoginPage from "./pages/auth/login/login";
import SignInPage from "./pages/auth/signin/signIn";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(0);
  const [isPopup, setIsPopup] = useState(false);
  const [dataPopup, setDataPopup] = useState({});

  console.log("todos", todos);
  useEffect(() => {
    console.log("heheh page laf", page);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json.splice(0 + page * 10, 10)));
  }, [page]);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />

      <button
        onClick={() => {
          const newTotos = [...todos];
          newTotos.push({
            userId: 1,
            id: new Date().getTime(),
            title: text,
          });
          setTodos(newTotos);
          setText("");
        }}
      >
        save
      </button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>id: {todo.id}</h3>
            <h3>title: {todo.title}</h3>
            <button
              onClick={
                !isPopup
                  ? () => {
                      setIsPopup(true);
                      setDataPopup(todo);
                    }
                  : () => {
                      alert("mo it thoi");
                    }
              }
            >
              sua
            </button>
            <button>xoas</button>
            <button>highlight</button>

          </div>
        );
      })}
      {isPopup && (
        <Popup
          data={dataPopup}
          onTurnOff={(isPopupCOn) => {
            setIsPopup(isPopupCOn);
          }}
        />
      )}
    </div>
  );
};

const Popup = ({ onTurnOff = () => {}, data = {} }) => {
  return (
    <div className="popup">
      <button onClick={() => onTurnOff(false)}>tat pop up</button>
      <h3>popup</h3>

      <input type="text" value={data.title} />
      <button>save</button>
      <button>reload</button>

    </div>
  );
};

export default App;
