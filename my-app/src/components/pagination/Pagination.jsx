/** @format */
import './style.css';
export const Pagination = ({totalRecords, currentPage, limit, setPage, setLimit}) => {
   const totalPage = Number(totalRecords / limit);
   const array = [];
   for (let i = 1; i <= totalPage; i++) {
      array.push(i);
   }
   const handleOnClick = (index) => {
      setPage(index + 1);
   };
   const handleOnChange = (e) => {
      setLimit(e.target.value);
      setPage(1);
   };
   return (
      <div className='pagination'>
         <select name='' id='' onChange={handleOnChange} value={limit}>
            <option value='5' selected={limit == 5}>
               5
            </option>
            <option value='10' selected={limit == 10}>
               10
            </option>
            <option value='20' selected={limit == 20}>
               20
            </option>
         </select>
         <button className='pagination_btn'>{'<'}</button>
         {array.map((item, index) => (
            <button
               key={index}
               className={`pagination_item ${index == currentPage - 1 && 'active'}`}
               onClick={(e) => handleOnClick(index)}
            >
               {item}
            </button>
         ))}
         <button className='pagination_btn'>{'>'}</button>
      </div>
   );
};
