const menu = document.querySelector('#buttonMenu');
let textArea = document.getElementById('textArea');

menu.addEventListener('click', event => {

    if(event.target.matches('button')) {

        const button = event.target; //set the clicked button
        const action = button.dataset.actions;

        switch (action) {
            case 'bold':
                setBold()
                break;
            case 'italic':
                setItalic()
                break;
            case 'underline':
                setUnderline()
                break;
        }

    }

})

const setBold = () => {
    selection('bold');
}
const setItalic = () => {
    selection('italic')
}
const setUnderline = () => {
    selection('underline')
}


const selection = (type) => {
    let length = textArea.value.length;
    let selectionStart = textArea.selectionStart;
    let selectionEnd = textArea.selectionEnd;

    let currentSelection = textArea.value.substring(selectionStart, selectionEnd);

    let replace;
    if(type === 'bold') {
        replace = '<b>' + currentSelection + '</b>';
    }
    if(type === 'italic') {
        replace = '<i>' + currentSelection + '</i>';
    }
    if(type === 'underline') {
        replace = '<u>' + currentSelection + '</u>';
    }

    textArea.value = textArea.value.substr(0, selectionStart) + replace + textArea.value.substr(selectionEnd, length);

}

//add a <br> tag on enter click
textArea.addEventListener('keydown', event => {
    if(event.key === 'Enter') {
        textArea.value += '<br>';
    }
})


//code for preview - to be removed later
let preview = document.getElementById('preview');
preview.innerHTML = textArea.value;
textArea.addEventListener('keyup', event => {
    preview.innerHTML = textArea.value;
})