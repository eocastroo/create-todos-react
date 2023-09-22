import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import React from 'react';

// Creaciom de userContext.

function TodoSearch (){
  const {
    searchValue,
    setSearchValue,
} = React.useContext(TodoContext)
  
    return(
        <input 
         placeholder="Cortar sebolla"
         className='TodoSearch'
         value={searchValue}
         onChange={(event) => {
           setSearchValue(event.target.value);
         }}
        />
    );
}

export {TodoSearch};