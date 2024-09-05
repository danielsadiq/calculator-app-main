const inputs = document.querySelectorAll(".switch-input");
const value = document.getElementById("value");

function changeTheme(){
    if(inputs[0].checked){     
        document.body.classList.remove("theme-2");      
        document.body.classList.remove("theme-3");      
    }
    if(inputs[1].checked){
        document.body.classList.add("theme-2");      
        document.body.classList.remove("theme-3");      
    }
    if(inputs[2].checked){
        document.body.classList.add("theme-3");      
        document.body.classList.remove("theme-2");      
    }
}

function handleClick(e){
    console.log(e.target.value)
}

