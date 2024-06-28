const cat = document.querySelector('#categories')
const listItem = cat.querySelectorAll('li.item');

console.log("Number of categories:", listItem.length);

for (const i of listItem) {
    const h = i.querySelector('h2');
    console.log("Category:", h.textContent);

    const elem = i.querySelectorAll('li');
    console.log("Elements:", elem.length);

    
}

// styles

const item = document.querySelectorAll(".item");
for (let i of item) {
    i.style.backgroundColor = "#f6f6fe";
    i.style.fontSize = "24px";
    i.style.lineHeight = "133%";
    i.style.letterSpacing = "0.04em";
    i.style.color = "#2e2f42";
    i.style.width = "392px";
    i.style.padding = "16px";
    i.style.borderRadius = "8px";
    i.style.marginBottom = "16px";

}

const liItem = document.querySelectorAll(".item li");
for (let i of liItem) {
    i.style.border = "1px solid #808080";
    i.style.borderRadius = "4px";
    i.style.width = "360px";
    i.style.height = "40px";
    i.style.paddingTop = "8px";
    i.style.paddingBottom = "8px";
    i.style.paddingLeft = "16px";
    i.style.fontWeight = "400";
    i.style.fontSize = "16px";
    i.style.lineHeight = "150%";
    i.style.letterSpacing = "0.04em";
    i.style.color = "#2e2f42";
}

const ulItem = document.querySelectorAll(".item ul");
for (let i of ulItem) {    
    i.style.display = "flex"
    i.style.flexDirection = "column"
    i.style.gap = "8px"
}

const header = document.querySelectorAll(".item h2");
for (let i of header) {
    i.style.marginBottom = "16px";
}

