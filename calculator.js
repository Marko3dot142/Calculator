let calculation = '';

document.getElementById('one').onclick = function () {
  calculation += '1';
  console.log(calculation);
};

document.getElementById('two').onclick = function () {
  calculation += '2';
  console.log(calculation);
};

document.getElementById('three').onclick = function () {
  calculation += '3';
  console.log(calculation);
};

document.getElementById('four').onclick = function () {
  calculation += '4';
  console.log(calculation);
};

document.getElementById('five').onclick = function () {
  calculation += '5';
  console.log(calculation);
};

document.getElementById('six').onclick = function () {
  calculation += '6';
  console.log(calculation);
};

document.getElementById('seven').onclick = function () {
  calculation += '7';
  console.log(calculation);
};

document.getElementById('eight').onclick = function () {
  calculation += '8';
  console.log(calculation);
};

document.getElementById('nine').onclick = function () {
  calculation += '9';
  console.log(calculation);
};

document.getElementById('zero').onclick = function () {
  calculation += '0';
  console.log(calculation);
};

document.getElementById('decimal').onclick = function () {
  calculation += '.';
  console.log(calculation);
};

document.getElementById('plus').onclick = function () {
  calculation += ' + ';
  console.log(calculation);
};

document.getElementById('minus').onclick = function () {
  calculation += ' - ';
  console.log(calculation);
};

document.getElementById('multiply').onclick = function () {
  calculation += ' * ';
  console.log(calculation);
};

document.getElementById('divide').onclick = function () {
  calculation += ' / ';
  console.log(calculation);
};

document.getElementById('equal').onclick = function () {
  calculation = eval(calculation);
  console.log(calculation);
};
