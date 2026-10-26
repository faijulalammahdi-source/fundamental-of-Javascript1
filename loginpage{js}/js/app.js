let eyebtn = document.querySelector('.eyebtn')
let inputpass = document.querySelector('.ghost')


 function bskHideAndShow (){
   if (inputpass.type == 'password'){
      inputpass.type = 'text'
       
      eyebtn.innerHTML='<i class="fa-regular fa-eye"></i>'
  } else{
     inputpass.type = "password"
  }
}
eyebtn.addEventListener('click', bskHideAndShow)



let intbtn = document.querySelector('.increment')
let inputbtn = document.querySelector('.counter input')


intbtn.addEventListener('click', ()=>{
   inputbtn.value = (Number(inputbtn.value) + 1)
})

let demtbtn = document.querySelector('.decrement')


demtbtn.addEventListener('click', ()=>{
  
   if(inputbtn.value > 1){ inputbtn.value = (Number(inputbtn.value) - 1) }
})


inputbtn.addEventListener('keydown', (e) => {
   if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
   }
})

let pointer = document.querySelector('.cursor')


window.addEventListener('mousemove', (e)=>{
   let left = e.clientX
   let top = e.clientY

   pointer.style.top = top + px;
   pointer.style.left = left + px; 
})