const cat = document.querySelector('#categories')
const listItem = cat.querySelectorAll('li.item');

console.log("Number of categories:", listItem.length);

for (const i of listItem) {
    const h = i.querySelector('h2');
    console.log("Category:", h.textContent);

    const elem = i.querySelectorAll('li');
    console.log("Elements:", elem.length);
}