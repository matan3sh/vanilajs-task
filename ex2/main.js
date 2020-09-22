'use strict';

var divEl = document.querySelector('.shape');
var rotateDeg = 0;

const onDraw = () => {
  divEl.innerHTML = '';
  const shapes = ['square', 'circle', 'triangle'];
  var randomShape = Math.floor(Math.random() * shapes.length);
  var shapeEl = document.createElement('div');
  shapeEl.classList.add(`${shapes[randomShape]}`);
  if (shapes[randomShape] !== 'triangle') {
    shapeEl.style.width = `${Math.floor(Math.random() * 200) + 1}px`;
    shapeEl.style.height = `${Math.floor(Math.random() * 200) + 1}px`;
    shapeEl.style.backgroundColor = getRandomColor();
  } else {
    shapeEl.style.borderLeft = `${
      Math.floor(Math.random() * 200) + 1
    }px solid transparent`;
    shapeEl.style.borderRight = `${
      Math.floor(Math.random() * 200) + 1
    }px solid transparent`;
    shapeEl.style.borderBottom = `${
      Math.floor(Math.random() * 200) + 1
    }px solid ${getRandomColor()}`;
  }
  shapeEl.style.margin = '100px 0';
  shapeEl.setAttribute('onclick', 'onChooseShape(event)');
  divEl.appendChild(shapeEl);
};

const onChooseShape = (event) => {
  if (event.target.classList.contains('choose')) return;
  event.target.classList.add('choose');

  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.setAttribute('onclick', 'onDeleteShape()');
  divEl.appendChild(deleteBtn);

  var rotateBtn = document.createElement('button');
  rotateBtn.innerHTML = 'Rotate';
  rotateBtn.setAttribute('onclick', 'onRotateShape()');
  divEl.appendChild(rotateBtn);
};

const onDeleteShape = () => {
  divEl.removeChild(divEl.childNodes[0]);
  divEl.innerHTML = '';
};

const onRotateShape = () => {
  var shapeEl = divEl.childNodes[0];
  shapeEl.style.transform = `rotate(${rotateDeg}deg)`;
  rotateDeg += 5;
};

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
