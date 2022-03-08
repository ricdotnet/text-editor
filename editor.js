const menu     = document.querySelector('#buttonMenu');
let   textArea = document.getElementById('textArea');

menu.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    const button = event.target;            //set the clicked button
    const action = button.dataset.actions;

    switch (action) {
      case 'bold': 
        setBold();
        break;
      case 'italic': 
        setItalic();
        break;
      case 'underline': 
        setUnderline();
        break;
      case 'h1': 
        setTitle1();
        break;
      case 'img': 
        setImage();
        break;
    }
  }
});

const setBold = () => {
  selection('bold');
};
const setItalic = () => {
  selection('italic');
};
const setUnderline = () => {
  selection('underline');
};
const setTitle1 = () => {
  selection('h1');
};
const setImage = () => {
  selection('img');
};

const selection = (type) => {
  let length         = textArea.value.length;
  let selectionStart = textArea.selectionStart;
  let selectionEnd   = textArea.selectionEnd;

  let currentSelection = textArea.value.substring(selectionStart, selectionEnd);

  let replace;
  if (type === 'bold') {
    replace = '<b>' + currentSelection + '</b>';
  }
  if (type === 'italic') {
    replace = '<i>' + currentSelection + '</i>';
  }
  if (type === 'underline') {
    replace = '<u>' + currentSelection + '</u>';
  }
  if (type === 'h1') {
    replace = '<h1 style="font-size: 28px">' + currentSelection + '</h1>';
  }
  if (type === 'img') {
    replace = '<img src="' + currentSelection + '" alt="image" />';
  }

  if (type === 'Enter') {
    if (selectionStart === length) {
      replace = '\n<br>';
    } else {
      replace = '\n<br>';
    }
  }

  textArea.value = 
    textArea.value.substr(0, selectionStart) +
    replace +
    textArea.value.substr(selectionEnd, length);
};

//add a <br> tag on enter click
textArea.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    selection(event.key);
  }
});

//code for preview - to be removed later
let preview           = document.getElementById('preview');
    preview.innerHTML = textArea.value;
textArea.addEventListener('keyup', (event) => {
  preview.innerHTML = textArea.value;
});
