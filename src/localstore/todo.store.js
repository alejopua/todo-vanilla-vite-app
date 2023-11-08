import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('soul stone'),
        new Todo('infinity stone'),
        new Todo('time stone'),
        new Todo('sky stone'),
        new Todo('tree stone'),
        new Todo('house stone'),

    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore()
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem( 'state', JSON.stringify(state) )
}

const getTodos = (filter = Filters.All) => {

    switch (filter) {
        case Filters.All:
            return state.todos;
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Option ${filter} is invalid`)
    }
}

const addTodo = ( description ) => {
    if (!description) throw new Error('The description is required')
    state.todos.push( new Todo (description) );
    saveStateToLocalStorage();
}

const toggleTodo = ( todoId ) => {
    state.todos =  state.todos.map(( todo ) => {
            if ( todo.id === todoId ) {
                todo.done = !todo.done;
            }
            return todo;
        })
    saveStateToLocalStorage();
}

const deleteTodo = ( todoId ) => {
    if (!todoId) throw new Error('Id invalid')
    state.todos = state.todos.filter( (todo) => todo.id !== todoId  )
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( (todo) => !todo.done )
    saveStateToLocalStorage();
}

const selectFilter = ( newFilter = Filters.All ) => {
    Object.keys(newFilter).includes(newFilter) ? state.filter = newFilter : state.filter = Filters.All;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    selectFilter,
    toggleTodo,
}