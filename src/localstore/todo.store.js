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
    console.log(state)
    console.log('init Store')
}

const loadStore = () => {
    throw new Error('Not implemented')
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
}

const toggleTodo = ( todoId ) => {
    state.todos =  state.todos.map(( todo ) => {
            if ( todo.id === todoId ) {
                todo.done = !todo.done;
            }
            return ;
        })
}

const deleteTodo = ( todoId ) => {
    if (!todoId) throw new Error('Id invalid')
    state.todos = state.todos.filter( (todo) => todo.id !== todoId  )
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( (todo) => todo.done )
}

const selectFilter = ( newFilter = Filters.All ) => {
    Object.keys(newFilter).includes(newFilter) ? state.filter = newFilter : state.filter = Filters.All;
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