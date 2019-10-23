
// Event listeners
$(document).ready(function() { /* code here */

    if(document.getElementById('navbar-main').classList.contains('bg-dark')){
        document.getElementById('day-night-mode').checked = true;
        console.log(document.getElementById('day-night-mode').checked)
    } else {
        document.getElementById('day-night-mode').checked = false;
        console.log(document.getElementById('day-night-mode').checked);
    }

    document.getElementById('day-night-mode').addEventListener( 'change', function() {

        console.log(`Hello. This is the event listener for the checkbox. I recognise this checkbox to be ${this.checked}.`);
        if(document.getElementById('day-night-mode').checked) {
            console.log(`I am the IF branch of the if statement. Look at me!`);
            activateDayMode();       
            document.getElementById('day-night-mode').checked = false;
        } else {
            console.log(`I am the ELSE branch of the if statement. Look at me!`);
            activateNightMode();
            document.getElementById('day-night-mode').checked = true;
        }
    });;
});

// Day Mode function
function activateDayMode() {
    // Remove night mode classes
    document.getElementById('faqCard').classList.remove('bg-secondary');
    document.getElementById('body').classList.remove('bg-dark');
    document.getElementById('navbar-main').classList.remove('navbar-dark', 'bg-dark');

    // Input fields
    // FaQ fields
    if(document.getElementById('question')){
        document.getElementById('question').style.backgroundColor = '';
        document.getElementById('question').style.borderColor = '';
        document.getElementById('question').style.color = '';
        }
    
    if(document.getElementById('answer')){
        document.getElementById('answer').style.backgroundColor = '';
        document.getElementById('answer').style.borderColor = '';
        document.getElementById('answer').style.color = '';
    }

    // Login & register fields
    if(document.getElementById('email')){
        document.getElementById('email').style.backgroundColor = '';
        document.getElementById('email').style.borderColor = '';
        document.getElementById('email').style.color = '';
    }
    
    if(document.getElementById('name')){
        document.getElementById('name').style.backgroundColor = '';
        document.getElementById('name').style.borderColor = '';
        document.getElementById('name').style.color = '';
    }

    if(document.getElementById('password')){
        document.getElementById('password').style.backgroundColor = '';
        document.getElementById('password').style.borderColor = '';
        document.getElementById('password').style.color = '';
    }


    if(document.getElementById('password-confirm')){
        document.getElementById('password-confirm').style.backgroundColor = '';
        document.getElementById('password-confirm').style.borderColor = '';
        document.getElementById('password-confirm').style.color = '';
    }

    // Add day mode classes
    document.getElementById('body').classList.add('bg-light');
    document.getElementById('navbar-main').classList.add('navbar-light', 'bg-white');
}

// Night Mode function
function activateNightMode() {
    // Remove day mode classes
    document.getElementById('body').classList.remove('bg-light');
    document.getElementById('navbar-main').classList.remove('navbar-light', 'bg-white');
    // Add night mode classes
    if(document.getElementById('question')){
        document.getElementById('question').style.backgroundColor = '#708fb2';
        document.getElementById('question').style.borderColor = '#000000';
        document.getElementById('question').style.color = '#CCCDCF';
    }

    if(document.getElementById('answer')){
        document.getElementById('answer').style.backgroundColor = '#708fb2';
        document.getElementById('answer').style.borderColor = '#000000';
        document.getElementById('answer').style.color = '#CCCDCF';
    }

    // Login & Register forms
    if(document.getElementById('email')){
        document.getElementById('email').style.backgroundColor = '#708fb2';
        document.getElementById('email').style.borderColor = '#000000';
        document.getElementById('email').style.color = '#CCCDCF';
    }
    
    if(document.getElementById('name')){
        document.getElementById('name').style.backgroundColor = '#708fb2';
        document.getElementById('name').style.borderColor = '#000000';
        document.getElementById('name').style.color = '#CCCDCF';
    }

    if(document.getElementById('password')){
        document.getElementById('password').style.backgroundColor = '#708fb2';
        document.getElementById('password').style.borderColor = '#000000';
        document.getElementById('password').style.color = '#CCCDCF';
    }


    if(document.getElementById('password-confirm')){
        document.getElementById('password-confirm').style.backgroundColor = '#708fb2';
        document.getElementById('password-confirm').style.borderColor = '#000000';
        document.getElementById('password-confirm').style.color = '#CCCDCF';
    }

    document.getElementById('faqCard').classList.add('bg-secondary');
    document.getElementById('body').classList.add('bg-dark');
    document.getElementById('navbar-main').classList.add('navbar-dark', 'bg-dark');
}

console.log(696060);