
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';



function App() {

  //estados
  
   return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );


}

export default App;
