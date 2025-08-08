/**
 * This script builds dynamically survey form using JS in the div with id "creating-a-web-form" instead of using HTML
 */

const formContainer = document.getElementById('creating-a-web-form');

// form 
const form = document.createElement('form');
form.id = 'survey-form';
form.action = 'https://formspree.io/f/mkgbrkdk';
form.method = 'post';

// helper function to create label with an required mark if needed
function createLabel(forId, text, required = false) {
    const label = document.createElement('label');
    label.setAttribute('for', forId);
    label.textContent = text;
  
    if (required) {
      const abbr = document.createElement('abbr');
      abbr.title = 'required';
      abbr.setAttribute('aria-label', 'required');
      abbr.textContent = '*';
      label.appendChild(document.createTextNode(' '));
      label.appendChild(abbr);
    }
  
    return label;
}

// helper function to create text, email, number, date input 
function createInput({ type, id, name, label, required = false, attributes = {} }) {
    const p = document.createElement('p');
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = name;
    if (required) input.required = true;
  
    for (const key in attributes) {
      input.setAttribute(key, attributes[key]);
    }
  
    const inputLabel = createLabel(id, label, required);
    p.appendChild(inputLabel);
    p.appendChild(input);
    return p;
}

// helper function to create select dropdown menu
function createSelect({ id, name, label, options, required = false }) {
    const p = document.createElement('p');
    const select = document.createElement('select');
    select.id = id;
    select.name = name;
    if (required) select.required = true;

    const blankOption = document.createElement('option');
    blankOption.value = '';
    blankOption.selected = true;
    blankOption.textContent = '   ';
    select.appendChild(blankOption);

    options.forEach(o => {
        const option = document.createElement('option');
        option.value = o.value;
        option.textContent = o.text;
        select.appendChild(option);
    });
    
    const selectLabel = createLabel(id, label, required);
    p.appendChild(selectLabel);
    p.appendChild(select);
    return p;
}

// helper function to create radio buttons
function createRadio({ name, legendText, options }) {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = legendText;
    fieldset.appendChild(legend);

    const ul = document.createElement('ul');
    options.forEach(o => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = name;
        input.value = o.value;
        if (o.checked) input.checked = true;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + o.label));
        li.appendChild(label);
        ul.appendChild(li);
    });

    fieldset.appendChild(ul);
    return fieldset;
}

// helper function to create textarea 
function createTextarea({ id, name, label, rows, cols, placeholder = '' }) {
    const p = document.createElement('p');
    const textarea = document.createElement('textarea');
    textarea.id = id;
    textarea.name = name;
    textarea.rows = rows;
    textarea.cols = cols;
    textarea.placeholder = placeholder;
  
    const textareaLabel = createLabel(id, label);
    p.appendChild(textareaLabel);
    p.appendChild(textarea);
    return p;
}

// helper function to create submit button
function createSubmitButton(text) {
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = text;
    p.appendChild(button);
    return p;
}

// creating form components 

// note about * near required fields
const requiredNote = document.createElement('p');
requiredNote.appendChild(document.createTextNode('Required fields are followed by '));
const strong = document.createElement('strong');
const span = document.createElement('span');
span.setAttribute('aria-label', 'required');
span.textContent = '*';
strong.appendChild(span);
requiredNote.appendChild(strong);
form.append(requiredNote);

// label and input beside
form.appendChild(createInput({
    type: 'text', 
    id: 'name_field', 
    name: 'name_field', 
    label: 'What is your name?', 
    required: true
}));
  
form.appendChild(createInput({
    type: 'email', 
    id: 'email_field', 
    name: 'email_field', 
    label: 'What is your email?', 
    required: true
}));
  
form.appendChild(createInput({
    type: 'number', 
    id: 'best_whole_number', 
    name: 'best_whole_number', 
    label: 'Which whole number is best?', 
    attributes: { min: 0, step: 1 }
}));
  
form.appendChild(createInput({
    type: 'date', 
    id: 'best_day', 
    name: 'best_day', 
    label: 'Which day is best?'
}));

// select menu
form.appendChild(createSelect({
    id: 'best_bear',
    name: 'best_bear',
    label: 'Which bear is best?',
    required: true,
    options: [
      { value: 'black', text: 'Black' },
      { value: 'brown', text: 'Brown' },
      { value: 'care', text: 'Care' },
      { value: 'panda', text: 'Panda' },
      { value: 'polar', text: 'Polar' },
      { value: 'teddy', text: 'Teddy' }
    ]
}));

// fieldset
form.appendChild(createRadio({
    name: 'enjoys_radio_buttons',
    legendText: 'Do you like radio buttons?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: '?', label: 'None of your business', checked: true }
    ]
}));

// textarea
form.appendChild(createTextarea({
    id: 'life_meaning',
    name: 'life_meaning',
    label: 'What is the meaning of life?',
    rows: 5,
    cols: 50,
    placeholder: 'Enter the correct answer here'
}));

form.appendChild(createSubmitButton('Send'));

formContainer.appendChild(form);