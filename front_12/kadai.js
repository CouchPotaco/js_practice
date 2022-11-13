//front12

let textInput = document.getElementById('textInput');
let displayArea = document.getElementById('msg');

textInput.addEventListener("change",()=>{
    let inputValue = textInput.value;
    displayArea.append(inputValue);
  });