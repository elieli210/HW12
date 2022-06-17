//1
let h1=document.getElementById('elemId');
h1.addEventListener('click',()=>{
console.log('goodBye');

});



//2
function showCoords(event) {
  let x = event.clientX;
  let y = event.clientY;
  let coords = "X coords: " + x + ", Y coords: " + y;
  console.log(coords);
}

