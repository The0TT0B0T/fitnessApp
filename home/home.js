document.addEventListener('DOMContentLoaded', (e) => {
// Getting the current date
const currentDate = new Date();
// Formant the date as "Month Day Year"
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-us', options);
// Select the HTML Document
const date = document.querySelector("#date");
//Add the formatted date to the date in document
date.textContent = `Current Date: ${formattedDate}`;
})