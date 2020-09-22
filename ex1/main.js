'use strict';

const onMarkWord = () => {
  var inputEl = document.getElementById('word');
  var pEl = document.getElementById('paragraph');
  var text = inputEl.value;
  var paragraph = pEl.innerHTML;
  var words = paragraph.split(' ');
  var output = '';
  words.forEach((word) => {
    if (text === word || text === word + ',' || text === word + '.')
      output += '<span class="highlight">' + word + '</span> ';
    else output += word + ' ';
  });
  pEl.innerHTML = output;
};
