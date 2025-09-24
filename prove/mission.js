let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let content = document.getElementById('content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = 'black';
        content.style.backgroundColor = '#333';
        content.style.color = 'white';
        logo.src = 'BYUIwhite.png';
        
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        content.style.backgroundColor = '#ffffff';
        content.style.color = 'black';
        logo.src = 'BYUI.png';

}     
}