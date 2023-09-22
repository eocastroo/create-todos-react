import './TodoList.css';

function TodoList({ children }){
    return(
        <lu className="TodoList" >
            {children}
        </lu>
    )

}

export {TodoList};