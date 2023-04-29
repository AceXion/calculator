let userpass = ''
let adminpass = ['ACE', 'MASTER', 'ADMIN']
alert('Enter admin pass 3 times')
for(let index = 0; index < adminpass.length; index++){
console.log(adminpass[index])
while (userpass !== adminpass) {
        userpass = window.prompt("ENTER ADMIN PASSWORDS TO USE MY CALCULATOR")
        if (userpass === adminpass[index]) {
            alert("PADAYON " + adminpass[index])
            break;
        }else if(userpass == ''){
            alert("WALAY SULOD, ANG IYANG LOVE NIMO KON AND IYANG LOVE KAY PURO LANG SA HUNA-HUNA. CORNY 🌽")
        }else{
            alert("MALI, GYUD BRAD SALA NI SA MGA BABAYE BRAD OUY")
        }
    }
}
alert('SHEESH WELCUM')
const output = document.getElementById('output')
const button = document.querySelectorAll('button')
button.forEach((items) => {
    items.onclick = () => {
        if (items.id == 'AC') {
            output.innerText = ''
        }else if ( items.id == 'DEL' ){
            let string = output.innerText.toString();
            output.innerText = string.substr(0, string.length -1);
        }else if(output.innerText != "" && items.id == "equal"){
            output.innerText = eval(output.innerText);
        }else if(output.innerText == "" && items.id == "equal"){
            output.innerText ="Empty!"
            setTimeout(() => {
                output.innerText=""
            },2000 );    
        }else{
            output.innerText += items.id
        }    
        if(output.innerText == "69" && items.id == "equal"){
            output.innerHTML = "Ur GAY"
            setTimeout(()=>(
                output.innerText =""
            ), 2000)    
        }    
    }    
})    


