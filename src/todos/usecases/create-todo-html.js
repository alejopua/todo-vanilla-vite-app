
export const createTodoHtml = ( todo ) => {
    if ( !todo ) throw new Error('Todo is required');
    const { done, description, id } = todo;
    const html = `
            <div class="view">
                <input class="toggle" type="checkbox" ${ done ? 'checked' : ''}>
                <label>${ description }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
    `;
    const element = document.createElement('li');
    element.innerHTML = html;
    element.setAttribute('data-id', id)
    if ( done )
        element.classList.add('completed')
    
    return element;

}