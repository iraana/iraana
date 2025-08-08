/**
 * This script builds the nav bar using JS to replace HTML one created before, so we don't have to copy same code on every page 
 */


// an array of navigation items, each object has a lable that will be showen and a link.
const navigationItems = [
    { lable: "Home", href:"index.html" },
    { lable: "Links", href:"links.html" },
    { lable: "Glossary", href:"glossary.html" },
    { lable: "Survey", href:"survey.html"} ,
];

// selecting the nav element from the HTML
const navElement = document.querySelector('nav');
const ulElement = document.createElement('ul');

// loop through each navigation item in the array
navigationItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.lable;
    a.href = item.href;
    li.appendChild(a);
    ulElement.appendChild(li);
});

navElement.appendChild(ulElement);

