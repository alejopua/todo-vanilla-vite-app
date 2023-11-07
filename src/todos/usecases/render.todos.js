import { createTodoHtml } from "./create-todo-html";

let element;
/**
 * 
 * @param {String} elementId 
 * @param {Todos} todos src/todos/models/todo.model.js
 */
export const renderTodos = ( elementId, todos = [] ) => {
    //Todo: reference
    if ( !element ) element = document.querySelector(elementId);
    if ( !element ) throw new Error(`Element with id ${elementId} not found`);
    element.innerHTML = '';
    todos.forEach( todo => {
        element.append( createTodoHtml( todo ) );
    });
}