import React from 'react';
import {useLocalStorage} from './useLocalStorage'; 

// Creacion del create context

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {
        item: todos,
        saveItem: saveTodos,  
        loading, 
        error,
      }= useLocalStorage('TODOS_V1',[] );
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      
      const completedTodos = todos.filter(
        todo => !! todo.completed
      ).length;
    
       const totalTodos = todos.length;
    
       const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLocaleLowerCase();
          const searchText = searchValue.toLocaleLowerCase();
          return todoText.includes(searchText);
        }
       );
       
       const addTodo = (text) =>{
       const newTodos = [...todos];
       newTodos.push({
        text,
        completed: false,
       });
        saveTodos(newTodos);

       }

       const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIntex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIntex].completed = true;
        saveTodos(newTodos);
       }
    
       const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIntex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIntex, 1);
        saveTodos(newTodos);
       };
    
    return (
    
    <TodoContext.Provider value={{
        loading,
        error,
        completeTodo,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos, 
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
    }}>
    {children}
    </TodoContext.Provider>
    
    );
    
}

export {TodoContext, TodoProvider}