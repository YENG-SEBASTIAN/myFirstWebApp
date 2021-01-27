// funtion to open and close the form
let form = document.getElementById('form');
windows.onclick = function(event){
    if(event.target == form){
        form.style.display = 'none';
    }
}

// a function to activate the form
 
function  allowme(){
    let name = document.getElementById('n1');
    let lover = document.getElementById('n2');
    let empty = "";
    let letters = /^[A-Za-z]+$/;

    let x = document.forms['myform']['n1']['n2'].value;
    if(x == empty){
        alert('Hey! Buddy, enter your name and lover name before you proceed.');
        return false; 
    }
}