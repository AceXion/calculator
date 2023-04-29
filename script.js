const output = document.getElementById('output')
const button = document.querySelectorAll('button')

button.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'AC') {
            output.innerText = ''
        }else if ( item.id == 'DEL' ){
            let string = output.innerText.toString();
            output.innerText = string.substr(0, string.length -1);
        }else if(output.innerText != "" && item.id == "equal"){
            output.innerText = eval(output.innerText);
        }else if(output.innerText == "" && item.id == "equal"){
            output.innerText ="Empty!"
            setTimeout(() => {
                output.innerText=""
            },2000 );
        }else{
            output.innerText += item.id
        }
        if(output.innerText == "69" && item.id == "equal"){
            output.innerHTML = "Ur GAY"
            setTimeout(()=>(
                output.innerText =""
            ), 2000)
        }
    }
})