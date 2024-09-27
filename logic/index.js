//``````````````````````````````````sidebar responsive``````````````````````````````````````
let btn = document.querySelector(".burger");
let element = document.querySelector(".sidebar");

btn.addEventListener('click', ()=>{
    element.classList.toggle("left");
})

//````````````````````````````````calculator functions``````````````````````````````````````

let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string)
        document.getElementById("inputS").value = string;

        }
        else if(e.target.innerHTML == 'C'){
            string = "(Coped!!!)"
        document.getElementById("inputS").value = string;

        }
        else if(e.target.innerHTML == 'CE'){
            string = ""
        document.getElementById("inputS").value = string;

        }
        else if(e.target.innerHTML == '%'){
            string = string + "/100"
        document.getElementById("inputS").value = string;

        }       
        else if (e.target.innerHTML == "delete") { 
            string = string.slice(0, -1);
            document.getElementById("inputS").value = string;
        }        
        else if (e.target.innerHTML == "+/-") { 
            console.log(e.target.innerHTML)
            if (document.getElementById("inputS").value >= 0) {
                document.getElementById("inputS").value = - string;
            }
            else{
                document.getElementById("inputS").value = string;
            }
        }        
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.getElementById("inputS").value = string;
        }
    })
});


