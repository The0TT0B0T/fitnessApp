// Add an event listener that runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (e) => {
    
    // Select the dropdown element with the ID 'categories'
    const categories = document.querySelector('#categories');
    
    // Add an event listener to the 'categories' element that runs when its value changes
    categories.addEventListener('change', (e) => {
        
        // Get the current value of the 'categories' dropdown
        const value = categories.value;
        
        // Select all elements with the class 'allforms' (returns a NodeList)
        const allForms = document.querySelectorAll('.allforms');
        
        // Iterate over each form in the NodeList
        allForms.forEach((form) => {
            
            // If the form does not have the class 'hidden'
            if (!form.classList.contains('hidden')) {
                
                // Add the class 'hidden' to the form
                form.classList.add('hidden');
            }
        });

        // If the selected value is not 'select'
        if (value !== 'select') {
            
            // Select the form with the ID matching the selected value
            const form = document.querySelector(`#${value}`);
            
            // Toggle the 'hidden' class on the selected form
            form.classList.toggle('hidden');
        }
    });

    // Add a 'watch' method to the Element prototype
    Element.prototype.watch = function(event, selector, callable) {

        // Select the target element based on the selector
        const target = document.querySelector(selector);

        // If the target element does not exist, log an error
        if (!target) {
            console.error('error');
        }

        // Define the function to handle the change event
        const handleChange = function() {
            
            // If a callable function is provided, call it
            if (callable !== undefined) {
                callable();
            } 
            else {
                // If the value of 'this' element is empty, clear the target text content
                if (this.value === '') {
                    target.textContent = '';
                } 
                else {
                    // Otherwise, set the target text content to the value of 'this' element
                    target.textContent = this.value;
                }
            }
        };

        // Add the event listener to 'this' element
        this.addEventListener(event, handleChange);

        // Define a function to remove the event listener
        this.disconnect = function() {
            this.removeEventListener(event, handleChange);
        }.bind(this);
    };

    // Select the element with the ID 'test'
    const test = document.querySelector('#test');
    
    // Use the 'watch' method on the 'test' element to watch for 'input' events and update the element with ID 'test-text'
    test.watch('input', '#test-text');
});
