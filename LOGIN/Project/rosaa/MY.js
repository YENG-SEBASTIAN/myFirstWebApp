

//second page  //making sure that only name are to be entered
        
        function Makesure(e){
            e.preventDefault();
            let name = document.getElementById('n1');
            let lover = document.getElementById('n2');
            let empty = "";
            let letters = /^[A-Za-z]+$/;
           if(name.value.match(letters) && lover.value.match(letters)){
            console.log("got here");
            window.location = "MY LOVE RES.html";
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
var mee = document.getElementById("n1").value;
var youu = document.getElementById("n2").value;
function myfun(){
   
    let x= document.getElementById("me").innerHTML = "hello!! the love percentage between you and your lover is:";
    let y = document.getElementById('answer').innerHTML = Math.floor(Math.random() * (90 - 60) + 70) + "%";
    console.log(mee);
   // console.log(x + '' +y);
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




 //a function to save data to local storage
 function saveData(){
    var first = document.getElementById("n1").value;
    var second = document.getElementById("n2").value;
    localStorage.setItem("data", first, second);
} 

// function to show the data from local storage
function showData(){
    var show = localStorage.getItem("data");
    alert("the lovers are: " + show);

}

// a function to capture the input names from the user
var names = [];

function AddRecord(){
    var man = document.getElementById("n1");
    names.push(man.value);
    man.value = "";
}

function DisplayRecord(){
    document.getElementById("names").innerHTML = names.join(", ");
}