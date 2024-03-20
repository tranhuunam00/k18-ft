/** @format */

import {useEffect, useRef, useState} from 'react';
import './App.css';
import LoginPage from './pages/auth/login/login';
import SignInPage from './pages/auth/signin/signIn';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   return (
      <div>
         <Todo />
      </div>
   );
}

const Todo = () => {
   const [todos, setTodos] = useState([]);
   const [text, setText] = useState('');
   const [page, setPage] = useState(0);
   const [isPopup, setIsPopup] = useState(false);
   const [dataPopup, setDataPopup] = useState({});
   const oldData = useRef(dataPopup);
   console.log('oldData', oldData.current);
   useEffect(() => {
      console.log('heheh page laf', page);
      fetch('https://jsonplaceholder.typicode.com/todos')
         .then((response) => response.json())
         .then((json) => setTodos(json.splice(0 + page * 10, 10)));
   }, [page]);

   return (
      <div style={{paddingLeft: '20%'}}>
         <input value={text} onChange={(e) => setText(e.target.value)} type='text' />

         <button
            onClick={() => {
               const newTotos = [...todos];
               newTotos.push({
                  userId: 1,
                  id: new Date().getTime(),
                  title: text,
               });
               setTodos(newTotos);
               setText('');
            }}
         >
            save
         </button>
         {todos.map((todo, index) => {
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
                                oldData.current = todo.title;
                             }
                           : () => {
                                alert('mo it thoi');
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
               setTodos={setTodos}
               todos={todos}
               oldData={oldData}
               setIsPopup={setIsPopup}
            />
         )}
      </div>
   );
};

const Popup = ({onTurnOff = () => {}, data = {}, setTodos, todos, oldData, setIsPopup}) => {
   // setDataPopup;
   const dataOld = useRef(data.title);
   const [value, setValue] = useState(data.title);
   const handleOnChange = (e) => {
      setValue(e.target.value);
   };
   // const newTodos = todos.;
   const index = todos.findIndex((todo) => todo.id === data.id);
   const newTodos = [...todos];
   const handleOnClick = () => {
      newTodos[index].title = value;
      setTodos(newTodos);
   };
   const handleReload = () => {
      setValue(dataOld.current);
   };
   const handleDelete = () => {
      const arr = newTodos.filter((todo) => todo.id !== data.id);
      setTodos(arr);
      setIsPopup(false);
   };
   return (
      <div className='popup'>
         <button onClick={() => onTurnOff(false)}>tat pop up</button>
         <h3>popup</h3>
         <input type='text' value={value} onChange={handleOnChange} />
         <button onClick={handleOnClick}>save</button>
         <button onClick={handleReload}>reload</button>
         <button onClick={handleDelete}>delete</button>
      </div>
   );
};

export default App;
