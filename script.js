const output = document.getElementById("output")
const buttons = document.querySelectorAll('button')
let string=""
buttons.forEach(button =>{
    button.onclick =() =>{
        if(button.value=="="){
            string=eval(string)
            output.value=string;
        }
        else if( button.value=="AC"){
            string=""
            output.value=string;
        }
        else if(button.value=="DEL"){
            string=string.substring(0, string.length-1)
            output.value=string
        }

        else{
            string += button.value
            output.value= string
        }
    }
})