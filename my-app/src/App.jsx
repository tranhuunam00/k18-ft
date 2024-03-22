/** @format */

import {useEffect, useRef, useState} from 'react';
import './App.css';
import LoginPage from './pages/auth/login/login';
import SignInPage from './pages/auth/signin/signIn';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Pagination} from './components/pagination/Pagination';
import {LoadMore} from './components/loadMore/LoadMore';
import {getDataMock} from './mock/indexMock';
import {FilterComponent} from './components/filter';

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
   const [page, setPage] = useState(1);
   const [isPopup, setIsPopup] = useState(false);
   const [dataPopup, setDataPopup] = useState({});
   const oldData = useRef(dataPopup);
   const [limit, setLimit] = useState(10);
   const [totalRecords, setTotalRecords] = useState(0);
   const [maxIndex, setMaxIndex] = useState(0);
   const [filter, setFilter] = useState({});
   useEffect(() => {
      console.log('heheh page laf', page);
      getDataMock({...filter}, {page: page, limit: limit}).then((data) => {
         setTotalRecords(data.count);
         setTodos(data.data);
      });
   }, [page, limit, filter]);

   // useEffect(() => {
   //    // fetchData();
   //    getDataMock({...filter}).then((json) => {
   //       const newTodos = json.filter((data, index) => data.id > maxIndex);
   //       const todos2 = newTodos.splice(0, limit);
   //       setTodos(todos.concat(todos2));
   //    });
   // }, [maxIndex]);

   return (
      <div style={{paddingLeft: '20%', paddingBottom: '50px'}}>
         <FilterComponent
            handleSearch={(value) => {
               setFilter({
                  ...filter,
                  keySearch: value,
               });
               setPage(1);
            }}
            handleSelect={(value) => {
               setFilter({
                  ...filter,
                  completed: value,
               });
               setPage(1);
            }}
         />
         {/* <input value={text} onChange={(e) => setText(e.target.value)} type='text' /> */}

         {todos.map((todo, index) => {
            return (
               <div key={todo.id}>
                  <h3>id: {todo.id}</h3>
                  <h3>title: {todo.title}</h3>
                  <h3>completed:{todo.completed.toString()}</h3>
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
         {/* <LoadMore
            handleSetMaxIndex={() => {
               let max = todos[0].id;
               for (let todo of todos) {
                  if (todo.id > max) max = todo.id;
               }
               setMaxIndex(max);
            }}
         /> */}
         <Pagination
            totalRecords={totalRecords}
            currentPage={page}
            limit={limit}
            setPage={setPage}
            setLimit={setLimit}
         />
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
