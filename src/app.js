import html from './app.html?raw'; // raw is used to import the html as a string
/**
 * 
 * @param {String} elementId represents the id of the element to which the app will be appended.
 */
export const App = (elementId) => {
    //when the app() function is called.
    (() => {
        const app = document.createElement('div'); // create a div element
        app.innerHTML = html; // set the innerHTML of the div to the html string
        document.querySelector(elementId).appendChild(app); // append the div to the element with the id passed to the function
    })();
}