
function clickDark(){
    button.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    if(button.classList.contains('dark-mode')){
        button.innerHTML = 'Light Mode';
        title.innerHTML = 'Dark Mode ON';
    } else {
        button.innerHTML = 'Dark Mode';
        title.innerHTML = 'Light Mode ON';
    }
}
const button = document.getElementById('mode-selector');
const title = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', clickDark);
button.addEventListener('mouseover',mouseOver);