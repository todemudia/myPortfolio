import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


const Todo = () => {
    const dummyData = ['Water the plants', 'Stop Grandma from microwaving the Cat', 'Finish my project', 'Walk the Dog']
    const [items, setItems] = useState(dummyData);
    
    const addNewItem = (newData) => {
      //Appends new data to the prev state
      setItems([...items, newData])
    }

    return (
        <div className='jumbotron jumbotron fluid'>
            <div className='container-fluid'>
            <h1 className='display-4 text-center'>Todoer</h1>
            <hr className='my-4' />        
            <TodoForm onSubmit={addNewItem}/>
            <TodoList items={items} />
            </div>
           
        </div>
    )
}

export default Todo;