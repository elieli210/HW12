let script=document.createElement('script');
let fileURL ="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";
script.src = fileURL;
let pathPart = script.src.split('/')[6];
console.log(pathPart);
console.log(script);

