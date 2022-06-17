 //1
 const container = document.querySelector('.cta_container');
      container.addEventListener('click', () => {
        console.log(container.nodeName);
       
      });


//2

const btn =document.querySelector('.cta_button');
btn.addEventListener('click',(e)=>{
    console.log(btn.nodeName);
    e.stopPropagation()
    
})
