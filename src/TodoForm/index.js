import React from "react";
import {TodoContext} from '../TodoContext'
import'./TodoForm.css';
import react from "react";

function TodoForm(){
 const {
        addTodo,
        setOpenModal,
} = react.useContext(TodoContext);

const [newTodoValue, setNewTodoValue] = react.useState('');

const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
};

const onCancel = () => {
    setOpenModal(false);
};

const onChange = (event) => {
    setNewTodoValue(event.target.value);
};


    return(
        <form onSubmit={ onSubmit}>
            <label>Escribe un nuevo TODO</label>
            <textarea 
             placeholder="Cortar cebolla para el almuerzo"
             value={newTodoValue}
             onChange={onChange}
            />
         <div className="TodoForm-buttonContainer">
            <button 
            type="button"
            className="TodoForm-button--cancel"
            onClick={onCancel}
            >Cancelar</button>
            <button
            type="submit"
             className="TodoForm-button--add"
            >Añadir</button>
         </div>
        </form>

    )
}

export {TodoForm}