
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

//Mobile menu navigation
function navMenuButton() {
  let menuItems = document.getElementById('dropMenu')
  let topMenuItem = document.getElementById('top-select');
  if (menuItems.className === 'top-nav') {
    menuItems.className += ' responsive';
    topMenuItem.className += ' responsive';
  } else
  menuItems.className = 'top-nav';
  topMenuItem.className = 'top-select';
}

//thumbButton reveal and hide on scroll
window.onscroll = function() {
  if (window.innerWidth < 864) menuButtonBottom()
};
function menuButtonBottom() {
  var bottomButton = document.getElementById('thumbButton')
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    bottomButton.style.display = 'inline';
  } else {
    bottomButton.style.display = 'none';
  }
}

console.log("we can run js in a script tag here. Hello from an inline script tag");
function docubod(){console.log(document.body)};
function docuimg(){console.log(document.images)};
function docuID(){console.log(document.getElementById('selectors'))}
function docuClass(){console.log(document.getElementsByClassName('selector-class'))}
function docuTag(){console.log(document.getElementsByTagName('h5'))}
function docuQueryAll(){console.log(document.querySelectorAll('img'))}
