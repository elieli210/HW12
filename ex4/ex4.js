let lis=document.getElementsByClassName('item'); //tag name return an array

  for(let i=0;i<lis.length;i++){
      lis[i].addEventListener('click',()=>{
        lis[i].style.textDecoration = "line-through"
        });
       
  }


  