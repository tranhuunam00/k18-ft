/** @format */

import {useState} from 'react';

export const FilterComponent = ({handleSearch, handleSelect}) => {
   const [value, setValue] = useState('');
   const [select, setSelect] = useState('all');
   // const [,setChecked]=useState(true)
   return (
      <div>
         <input
            type='text'
            onChange={(e) => {
               setValue(e.target.value);
               handleSearch(e.target.value);
            }}
         />
         <button onClick={() => handleSearch(value)}>Search</button>
         <h3>Trang thai</h3>
         <select
            name=''
            id=''
            value={select}
            onChange={(e) => {
               handleSelect(e.target.value);
               setSelect(e.target.value);
            }}
         >
            <option value='all'>All</option>
            <option value='true'>True</option>
            <option value='false'>False</option>
         </select>
      </div>
   );
};
