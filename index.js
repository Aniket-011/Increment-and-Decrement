const countval = document.querySelector("#count");

function increment (){
   // get the value from UI
   let value = parseInt(countval.innerText)
   // here innerText is use to convert the string data in intger form
   value = value+1;
   // give the value to UI
   countval.innerText = value;
}

function decrement (){
   let value = parseInt(countval.innerText)
   value = value-1;
   countval.innerText = value;
}