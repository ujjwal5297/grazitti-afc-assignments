groceryref = document.getElementById('grocery');
listref = document.getElementById('item');

const setTitle = () => {
    let gro = document.getElementById('title').value;
    groceryref.innerHTML = gro;
    console.log('hello')
}

const addItem = () => {
    console.log('hi');
    let itemref = document.getElementById('list').value;
    let arr = []
    arr.push(`<div class="input"><input type="checkbox" class="checkbox" name="" id="checkbox"><label for="checkbox">${itemref}</label></div>`);
    console.log(arr);
    listref.innerHTML += [arr];

}
