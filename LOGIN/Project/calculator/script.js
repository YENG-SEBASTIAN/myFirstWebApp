document.getElementById("answer").innerHTML = Math.floor(Math.random()*(60-10)+50);

            let sabs= document.body;
            console.log(sabs);

            console.log(sabs.children);
            let yeng = document.querySelectorAll('p');
            console.log(yeng[1]);

            let me = document.querySelectorAll('p');
            me[0].style.background = "red";
            me[0].style.color = "red";
            me[3].style.fontSize = "18px";
            me[2].style.background = "black";
          document.querySelector(".come").style.fontSize = "25px";
          

          let mybody = document.getElementById('mybody');
          let myp = document.createElement('p');
          let node = document.createTextNode("Please this coming from javascript");
          mybody.appendChild(node);

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);