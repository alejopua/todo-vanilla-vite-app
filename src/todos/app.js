import html from './app.html?raw'; // raw is used to import the html as a string
import todoStore from '../localstore/todo.store'; // import the todoStore
import { renderTodos } from './usecases';

const ElementIDs = {
    TodoList: '.todo-list',
    TodoInputId: '.new-todo',
}

/**
 * 
 * @param {String} elementId represents the id of the element to which the app will be appended.
 */
export const App = (elementId) => {

    const displayTodos = () => { // function to render the todos in the list 
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() ); // get the todos from the store
        renderTodos( ElementIDs.TodoList, todos ); // render the todos to the element with the id passed to the function (ElementIDs.TodoList) 
    }

    //when the app() function is called.
    (()=> {
        const app = document.createElement('div'); // create a div element
        app.innerHTML = html; // set the innerHTML of the div to the html string
        document.querySelector(elementId).appendChild(app); // append the div to the element with the id passed to the function
        displayTodos();
    })();

    // Referent HTML
    const newTodoInputDescription = document.querySelector( ElementIDs.TodoInputId );
    const todoUList = document.querySelector( ElementIDs.TodoList );

    // Listeners
    newTodoInputDescription.addEventListener('keyup', (e) => {
        if ( e.keyCode !== 13 ) return;
        if ( e.target.value.trim().length === 0 ) return;
    
        todoStore.addTodo(e.target.value)
        displayTodos();
        e.target.value = ''
    })

    todoUList.addEventListener('click', (e) => {
        const element = e.target.closest('[data-id]');
        const id = element.getAttribute('data-id');
        todoStore.toggleTodo( id );
        displayTodos();
    })
}