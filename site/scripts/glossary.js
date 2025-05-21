
// array of a glossary terms with descripthion
const glossaryEnteries = [
    {term:"HTML", description: "The standard language used to structure content on the web. It defines elements like headings, paragraphs, links, images, and more."},
    {term:"JavaScript", description: "A scripting language used to make web pages interactive. It can respond to user actions, update content dynamically, and control multimedia."},
    {term:"Hyperlink", description: "An HTML element used to link to other pages, files, or email addresses."},
    {term:"Attribute", description: "A modifier of an HTML element that provides additional information. "},
    {term:"DOM", description: "A programming interface for web documents. JavaScript uses the DOM to access and change HTML elements, styles, and content dynamically."},
]

// captured the main element by using it id
const main = document.getElementById("creating-a-glossary");

// used document.createElement() to create required level 1 heading and a description list in <main>

const heading1 = document.createElement("h1"); 
heading1.textContent = "Glossary";
main.appendChild(heading1); // adding to main

const dl = document.createElement("dl");

//use forEach to iteratively add each glossary entry to the <dl>, also could have used map to do this 
glossaryEnteries.forEach(e => {

    const dt = document.createElement("dt"); // creating term
    dt.textContent = e.term;
  
    const dd = document.createElement("dd"); // creating description
    dd.textContent = e.description;

    // appending term and description to the list
    dl.appendChild(dt);
    dl.appendChild(dd);
  });

  main.appendChild(dl);

  //https://chatgpt.com/share/682e55c9-45b0-8002-8ccf-a7b5d0513ea3