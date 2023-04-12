'use strict';

// Make the DIV element draggable:
// dragElement(document.getElementById('mydiv'));

const btnRolling = document.querySelector('.btn--rolling');
const diceElmnt = document.querySelector('.dice');
const diceElmnt2 = document.querySelector('.dice2');

let boardGrid = new Array(10);

for (let i = 0; i < 10; i++) boardGrid[i] = new Array(12);

for (let i = 0; i < 10; i++) for (let j = 0; j < 12; j++) boardGrid[i][j] = 0;

console.log(boardGrid);

//First piece dragging
const diceNew = document.querySelector('.tavla');

diceNew.classList.remove('hidden');
diceNew.src = 'black-tavla.png';

dragElement(diceNew);

//Second piece dragging
const diceNew1 = document.querySelector('.tavla1');

diceNew1.classList.remove('hidden');
diceNew1.src = 'black-tavla.png';

dragElement(diceNew1);

//Third piece dragging
const diceNew2 = document.querySelector('.tavla2');

diceNew2.classList.remove('hidden');
diceNew2.src = 'black-tavla.png';

dragElement(diceNew2);

//Fourth piece dragging
const diceNew3 = document.querySelector('.tavla3');

diceNew3.classList.remove('hidden');
diceNew3.src = 'black-tavla.png';

dragElement(diceNew3);

//Fifth piece dragging
const diceNew4 = document.querySelector('.tavla4');

diceNew4.classList.remove('hidden');
diceNew4.src = 'black-tavla.png';

dragElement(diceNew4);

//Sixth piece dragging
const diceNew5 = document.querySelector('.tavla5');

diceNew5.classList.remove('hidden');
diceNew5.src = 'black-tavla.png';

dragElement(diceNew5);

//Seventh piece dragging
const diceNew6 = document.querySelector('.tavla6');

diceNew6.classList.remove('hidden');
diceNew6.src = 'black-tavla.png';

dragElement(diceNew6);

//Eight piece dragging
const diceNew7 = document.querySelector('.tavla7');

diceNew7.classList.remove('hidden');
diceNew7.src = 'black-tavla.png';

dragElement(diceNew7);

//Ninth piece dragging
const diceNew8 = document.querySelector('.tavla8');

diceNew8.classList.remove('hidden');
diceNew8.src = 'black-tavla.png';

dragElement(diceNew8);

//Tenth piece dragging
const diceNew9 = document.querySelector('.tavla9');

diceNew9.classList.remove('hidden');
diceNew9.src = 'black-tavla.png';
dragElement(diceNew9);

//11 piece dragging
const diceNew10 = document.querySelector('.tavla10');

diceNew10.classList.remove('hidden');
diceNew10.src = 'black-tavla.png';
dragElement(diceNew10);

//12 piece dragging
const diceNew11 = document.querySelector('.tavla11');

diceNew11.classList.remove('hidden');
diceNew11.src = 'black-tavla.png';
dragElement(diceNew11);

//13 piece dragging
const diceNew12 = document.querySelector('.tavla12');

diceNew12.classList.remove('hidden');
diceNew12.src = 'black-tavla.png';
dragElement(diceNew12);

//14 piece dragging
const diceNew13 = document.querySelector('.tavla13');

diceNew13.classList.remove('hidden');
diceNew13.src = 'black-tavla.png';
dragElement(diceNew13);

//15 piece dragging
const diceNew14 = document.querySelector('.tavla14');

diceNew14.classList.remove('hidden');
diceNew14.src = 'black-tavla.png';
dragElement(diceNew14);

//////////////////// WHITE PIECES////////////////////////////////////////

//First piece dragging
const diceNewWhite = document.querySelector('.tavlaWhite');

diceNewWhite.classList.remove('hidden');
diceNewWhite.src = 'white-tavla.png';

dragElement(diceNewWhite);

//Second piece dragging
const diceNewWhite1 = document.querySelector('.tavlaWhite1');

diceNewWhite1.classList.remove('hidden');
diceNewWhite1.src = 'white-tavla.png';

dragElement(diceNewWhite1);

//Third piece dragging
const diceNewWhite2 = document.querySelector('.tavlaWhite2');

diceNewWhite2.classList.remove('hidden');
diceNewWhite2.src = 'white-tavla.png';

dragElement(diceNewWhite2);

//Fourth piece dragging
const diceNewWhite3 = document.querySelector('.tavlaWhite3');

diceNewWhite3.classList.remove('hidden');
diceNewWhite3.src = 'white-tavla.png';

dragElement(diceNewWhite3);

//Fifth piece dragging
const diceNewWhite4 = document.querySelector('.tavlaWhite4');

diceNewWhite4.classList.remove('hidden');
diceNewWhite4.src = 'white-tavla.png';

dragElement(diceNewWhite4);

//Sixth piece dragging
const diceNewWhite5 = document.querySelector('.tavlaWhite5');

diceNewWhite5.classList.remove('hidden');
diceNewWhite5.src = 'white-tavla.png';

dragElement(diceNewWhite5);

//Seventh piece dragging
const diceNewWhite6 = document.querySelector('.tavlaWhite6');

diceNewWhite6.classList.remove('hidden');
diceNewWhite6.src = 'white-tavla.png';

dragElement(diceNewWhite6);

//Eight piece dragging
const diceNewWhite7 = document.querySelector('.tavlaWhite7');

diceNewWhite7.classList.remove('hidden');
diceNewWhite7.src = 'white-tavla.png';

dragElement(diceNewWhite7);

//Ninth piece dragging
const diceNewWhite8 = document.querySelector('.tavlaWhite8');

diceNewWhite8.classList.remove('hidden');
diceNewWhite8.src = 'white-tavla.png';

dragElement(diceNewWhite8);

//Tenth piece dragging
const diceNewWhite9 = document.querySelector('.tavlaWhite9');

diceNewWhite9.classList.remove('hidden');
diceNewWhite9.src = 'white-tavla.png';
dragElement(diceNewWhite9);

//11 piece dragging
const diceNewWhite10 = document.querySelector('.tavlaWhite10');

diceNewWhite10.classList.remove('hidden');
diceNewWhite10.src = 'white-tavla.png';
dragElement(diceNewWhite10);

//12 piece dragging
const diceNewWhite11 = document.querySelector('.tavlaWhite11');

diceNewWhite11.classList.remove('hidden');
diceNewWhite11.src = 'white-tavla.png';
dragElement(diceNewWhite11);

//13 piece dragging
const diceNewWhite12 = document.querySelector('.tavlaWhite12');

diceNewWhite12.classList.remove('hidden');
diceNewWhite12.src = 'white-tavla.png';
dragElement(diceNewWhite12);

//14 piece dragging
const diceNewWhite13 = document.querySelector('.tavlaWhite13');

diceNewWhite13.classList.remove('hidden');
diceNewWhite13.src = 'white-tavla.png';
dragElement(diceNewWhite13);

//15 piece dragging
const diceNewWhite14 = document.querySelector('.tavlaWhite14');

diceNewWhite14.classList.remove('hidden');
diceNewWhite14.src = 'white-tavla.png';
dragElement(diceNewWhite14);

function initialSetup() {
  //Setup black pieces
  diceNew.style.left = 562 + 'px';
  diceNew.style.top = 430 + 'px';

  diceNew1.style.left = 562 + 'px';
  diceNew1.style.top = 400 + 'px';

  diceNew2.style.left = 562 + 'px';
  diceNew2.style.top = 370 + 'px';

  diceNew3.style.left = 562 + 'px';
  diceNew3.style.top = 340 + 'px';

  diceNew4.style.left = 562 + 'px';
  diceNew4.style.top = 310 + 'px';

  diceNew5.style.left = 195 + 'px';
  diceNew5.style.top = 130 + 'px';

  diceNew6.style.left = 195 + 'px';
  diceNew6.style.top = 160 + 'px';

  diceNew7.style.left = 195 + 'px';
  diceNew7.style.top = 190 + 'px';

  diceNew8.style.left = 195 + 'px';
  diceNew8.style.top = 220 + 'px';

  diceNew9.style.left = 195 + 'px';
  diceNew9.style.top = 250 + 'px';

  diceNew10.style.left = 840 + 'px';
  diceNew10.style.top = 130 + 'px';

  diceNew11.style.left = 840 + 'px';
  diceNew11.style.top = 160 + 'px';

  diceNew12.style.left = 417 + 'px';
  diceNew12.style.top = 430 + 'px';

  diceNew13.style.left = 417 + 'px';
  diceNew13.style.top = 400 + 'px';

  diceNew14.style.left = 417 + 'px';
  diceNew14.style.top = 370 + 'px';

  //setup white pieces
  diceNewWhite.style.left = 195 + 'px';
  diceNewWhite.style.top = 430 + 'px';

  diceNewWhite1.style.left = 195 + 'px';
  diceNewWhite1.style.top = 400 + 'px';

  diceNewWhite2.style.left = 195 + 'px';
  diceNewWhite2.style.top = 370 + 'px';

  diceNewWhite3.style.left = 195 + 'px';
  diceNewWhite3.style.top = 340 + 'px';

  diceNewWhite4.style.left = 195 + 'px';
  diceNewWhite4.style.top = 310 + 'px';

  diceNewWhite5.style.left = 562 + 'px';
  diceNewWhite5.style.top = 130 + 'px';

  diceNewWhite6.style.left = 562 + 'px';
  diceNewWhite6.style.top = 160 + 'px';

  diceNewWhite7.style.left = 562 + 'px';
  diceNewWhite7.style.top = 190 + 'px';

  diceNewWhite8.style.left = 562 + 'px';
  diceNewWhite8.style.top = 220 + 'px';

  diceNewWhite9.style.left = 562 + 'px';
  diceNewWhite9.style.top = 250 + 'px';

  diceNewWhite10.style.left = 840 + 'px';
  diceNewWhite10.style.top = 430 + 'px';

  diceNewWhite11.style.left = 840 + 'px';
  diceNewWhite11.style.top = 400 + 'px';

  diceNewWhite12.style.left = 417 + 'px';
  diceNewWhite12.style.top = 130 + 'px';

  diceNewWhite13.style.left = 417 + 'px';
  diceNewWhite13.style.top = 160 + 'px';

  diceNewWhite14.style.left = 417 + 'px';
  diceNewWhite14.style.top = 190 + 'px';
}
///Initial Setup
initialSetup();

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  let topX;
  if (document.getElementById(elmnt.id + 'header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    //console.log(elmnt.style.top, elmnt.style.left);
  }

  function placeOnGridTop(top) {
    top = top.replace('px', '');
    console.log(top);
    if (top > 430) top = 430;
    else if (top > 400 && top < 430) top = 400;
    else if (top > 370 && top < 400) top = 370;
    else if (top > 340 && top < 370) top = 340;
    else if (top > 310 && top < 340) top = 310;
    else if (top > 280 && top < 310) top = 310;
    else if (top > 250 && top < 280) top = 310;
    else if (top > 220 && top < 250) top = 240;
    else if (top > 190 && top < 220) top = 210;
    else if (top > 160 && top < 190) top = 190;
    else if (top > 130 && top < 160) top = 160;
    else if (top < 130) top = 130;

    elmnt.style.top = top + 'px';
    return top;
  }

  function placeOnGridLeft(left) {
    left = left.replace('px', '');
    console.log(left);
    if (left > 810) {
      left = 840;
      //boardGrid[1][11] = 1;
    } else if (left > 756 && left < 810) {
      left = 786;
      //boardGrid[1][10] = 1;
    } else if (left > 702 && left < 756) {
      left = 730;
      //boardGrid[1][9] = 1;
    } else if (left > 645 && left < 702) {
      left = 673;
      //boardGrid[1][8] = 1;
    } else if (left > 590 && left < 645) {
      left = 617;
      //boardGrid[1][7] = 1;
    } else if (left > 525 && left < 590) {
      left = 562;
      //boardGrid[1][6] = 1;
    } else if (left > 445 && left < 525) {
      left = 471;
      //boardGrid[1][5] = 1;
    } else if (left > 390 && left < 445) {
      left = 417;
      //boardGrid[1][4] = 1;
    } else if (left > 333 && left < 390) {
      left = 360;
      //boardGrid[1][3] = 1;
    } else if (left > 274 && left < 333) {
      left = 304;
      //boardGrid[1][2] = 1;
    } else if (left > 223 && left < 274) {
      left = 250;
      //boardGrid[1][1] = 1;
    } else if (left < 223) {
      left = 195;
      //boardGrid[1][0] = 1;
    }

    elmnt.style.left = left + 'px';
    return left;
  }

  function closeDragElement() {
    console.log(elmnt.style.top);
    let gridTop = placeOnGridTop(elmnt.style.top);
    let gridLeft = placeOnGridLeft(elmnt.style.left);
    console.log(gridLeft, gridTop);

    if (gridLeft === 840 && gridTop === 420) boardGrid[0][0] = 1;
    else if (gridLeft === 786 && gridTop === 420) boardGrid[0][1] = 1;
    else if (gridLeft === 730 && gridTop === 420) boardGrid[0][2] = 1;
    else if (gridLeft === 673 && gridTop === 420) boardGrid[0][3] = 1;
    else if (gridLeft === 617 && gridTop === 420) boardGrid[0][4] = 1;
    else if (gridLeft === 562 && gridTop === 420) boardGrid[0][5] = 1;
    else if (gridLeft === 471 && gridTop === 420) boardGrid[0][6] = 1;
    else if (gridLeft === 417 && gridTop === 420) boardGrid[0][7] = 1;
    else if (gridLeft === 360 && gridTop === 420) boardGrid[0][8] = 1;
    else if (gridLeft === 304 && gridTop === 420) boardGrid[0][9] = 1;
    else if (gridLeft === 250 && gridTop === 420) boardGrid[0][10] = 1;
    else if (gridLeft === 195 && gridTop === 420) boardGrid[0][11] = 1;

    if (gridLeft === 840 && gridTop === 420) boardGrid[9][0] = 1;
    else if (gridLeft === 786 && gridTop === 127) boardGrid[9][1] = 1;
    else if (gridLeft === 730 && gridTop === 127) boardGrid[9][2] = 1;
    else if (gridLeft === 673 && gridTop === 127) boardGrid[9][3] = 1;
    else if (gridLeft === 617 && gridTop === 127) boardGrid[9][4] = 1;
    else if (gridLeft === 562 && gridTop === 127) boardGrid[9][5] = 1;
    else if (gridLeft === 471 && gridTop === 127) boardGrid[9][6] = 1;
    else if (gridLeft === 417 && gridTop === 127) boardGrid[9][7] = 1;
    else if (gridLeft === 360 && gridTop === 127) boardGrid[9][8] = 1;
    else if (gridLeft === 304 && gridTop === 127) boardGrid[9][9] = 1;
    else if (gridLeft === 250 && gridTop === 127) boardGrid[9][10] = 1;
    else if (gridLeft === 195 && gridTop === 127) boardGrid[9][11] = 1;

    /*
    if (
      elmnt.style.left == diceNew.style.left &&
      elmnt.style.top == diceNew.style.top &&
      elmnt != diceNew
    ) {
      addVertSpace(elmnt);
      console.log('case1 checkpoint');
    } else if (
      elmnt.style.left == diceNew1.style.left &&
      elmnt.style.top == diceNew1.style.top &&
      elmnt != diceNew1
    ) {
      addVertSpace(elmnt);
      console.log('case2 checkpoint');
    } else if (
      elmnt.style.left == diceNew2.style.left &&
      elmnt.style.top == diceNew2.style.top &&
      elmnt != diceNew2
    ) {
      addVertSpace(elmnt);
      console.log('case3 checkpoint');
    } else if (
      elmnt.style.left == diceNew3.style.left &&
      elmnt.style.top == diceNew3.style.top &&
      elmnt != diceNew3
    ) {
      addVertSpace(elmnt);
      console.log('case3 checkpoint');
    }
*/
    console.log(boardGrid);
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function addVertSpace(elemnt) {
    console.log('check');
    let topTemp = elemnt.style.top;
    topTemp = topTemp.replace('px', '');
    topTemp = Number(topTemp);
    topTemp -= 45;
    elemnt.style.top = topTemp + 'px';
    console.log(elemnt.style.top);
  }
}

// Rolling dice funtion
btnRolling.addEventListener('click', function () {
  //console.log('btnRolling');
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  const dice2 = Math.trunc(Math.random() * 6) + 1;
  console.log(dice2);

  diceElmnt.classList.remove('hidden');
  diceElmnt.src = `dice-${dice}.png`;

  diceElmnt2.classList.remove('hidden');
  diceElmnt2.src = `dice-${dice2}.png`;
});
