// funtion to tell the user he or she is already on the page
function home(){
    alert('Please you are already on the home page, Please make your choice and proceed.');
}

function    calculate(){
    alert('If you want to calculate then press on the yes button to do that.');
}

//second page  //making sure that only name are to be entered
        
        function Makesure(e){
            e.preventDefault();
            let name = document.getElementById('n1');
            let lover = document.getElementById('n2');
            let empty = "";
            let letters = /^[A-Za-z]+$/;
           if(name.value.match(letters) && lover.value.match(letters)){
            console.log("got here");
            window.location = "outcome.html";
           }else if(name.value == empty || lover.value == empty){
               alert('Hey! Challey, make sure you enter your name and lover name before proceeding');
           }else{
               alert('Please enter alphabetic names and nothing else');
           }
        }

// oncl
let me = document.querySelector("#cal");
me.onclick = Makesure;


    
//show data
function ShowData(){

    var table = document.getElementById("table");
    for(var x = 0; x < arr.length; x++){
            //creating a new row
    var newRow = table.insertRow(table.length);
        //creating new cells
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
        //get values from input text into cells
    var name = document.getElementById("n1").value;
    var Lover = document.getElementById("n2").value;

    cell1.innerHTML = name;
    cell2.innerHTML = Lover;
       
    }
    
}

//adding a row
function AddRow(){
        //get the table by id
    var table = document.getElementById("table");
        //creating a new row
    var newRow = table.insertRow(table.length);
        //creating new cells
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
        //get values from input text into cells
    var name = document.getElementById("n1").value;
    var Lover = document.getElementById("n2").value;

    cell1.innerHTML = name;
    cell2.innerHTML = Lover;
}


