//Grab Single element
// const form = document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#my-form'));

//Select Multiple Elements
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));

// nodeItems.forEach(it => console.log(it));
// colItems.forEach(it => console.log(it));
// for(let i = 0; i < colItems.length; i++){
//     console.log(colItems[i]);
// }

//DOM Manipulation
// const ul = document.querySelector('.items');
// ul.remove();

// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';

//Event Listener
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h4>JavaScript</h4>';
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = '<h4>Please enter all fields</h4>';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        const text = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);
        li.appendChild(text);
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}