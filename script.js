

// Retrieving html elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



// function to update class and message for errors

function showError(input , message){

    // Get the parent element of the input field(.form-control)
    const formControl =  input.parentElement;
    // override the class -- add error
    formControl.className = ' form-control error';
    // Get the small element for the error messages
    const small = formControl.querySelector('small');

    // override the text from the small element using the input message
    small.innerText = message;
    

}


// Function to update class for success

function showSuccess(input){
     // Get the parent element of the input field(.form-control)
     const formControl =  input.parentElement;
     // override the class -- add error
    formControl.className = ' form-control success';



}


// create a function to check a valid email

function isValidEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

}




// check to see if fields meet required field requirements 

// Event Lisnteners
// create event listener for submit button
form.addEventListener('submit', function(e){
    //stop page from reloading on submit
    e.preventDefault();
    console.log(username.value);

    // check if username is empty
    if(username.value === '')
    {
        showError(username ,' Username is required');
    }else
    {
        showSuccess(username);
    }


    // check if email is empty
    if(email.value === '')
    {
        showError(email ,' Email is required');
    }
    else if (!isValidEmail(email.value))
    {

        showError(email,'Email is invalid')

    }
    
    else
    {
        showSuccess(email);
    }

    // check if password is empty
    if(password.value === '')
    {
        showError(password ,' Password is required');
    }else
    {
        showSuccess(password);
    }


    // check if password2 is empty
    if(password2.value === '')
    {
        showError(password2 ,' Confirm Password is required');
    }else
    {
        showSuccess(password2);
    }






} );



