
function changeToBlack(){
  let myLi = document.getElementsByTagName('li');
  for (let i=0; i < myLi.length; i++) {
    myLi[i].style.color = 'black';
    console.log(myLi[i])
  }
}

function changeToRed(){
  let myLi = document.getElementsByTagName('li');
  for (let i = 0; i < myLi.length; i++) {
  myLi[i].style.color = 'red';
  console.log(myLi[i])
  }
  
}

console.log("we can run js in a script tag here. Hello from an inline script tag");
function docubod(){console.log(document.body)};
function docuimg(){console.log(document.images)};
function docuID(){console.log(document.getElementById('selectors'))}
function docuClass(){console.log(document.getElementsByClassName('selector-class'))}
function docuTag(){console.log(document.getElementsByTagName('h5'))}
function docuQueryAll(){console.log(document.querySelectorAll('img'))}
