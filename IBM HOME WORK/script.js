const input = document.querySelector('#input-box')
const button = document.querySelectorAll('button')

let showNumber = ''
const convartArrayButton = Array.from(button)    

convartArrayButton.forEach((Btn)=>{
  Btn.addEventListener('click', (e)=>{
    if(e.target.innerText === 'DEL'){
        showNumber = showNumber.slice(0, showNumber.length -1)
        input.value = showNumber
    }else if(e.target.innerText === 'AC'){
        showNumber = ''
        input.value = showNumber
    }else if(e.target.innerText === '='){
        showNumber = eval(showNumber)
        input.value = showNumber
    } else{
        showNumber += e.target.innerText
        input.value = showNumber
    }

  })
})



// How Bulid calculator...?
// 1. html value to convart array (syn:- Array.form(this value) 
// 2. Eatch button seprate means whole array saparate wev are used to loop (syn:-arrayValue.forEatch()) then convart eatch button
// 3. forEatch  function tack the value put the event event value tack add to e.tergat.innerText
// 4. then used to if else this if else we are add the logic 









































