"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<p>' + coffee.id + '</p>';
    html += '<p>' + coffee.name + '</p>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    { name: 'Light City', roast: 'light'},
    { name: 'Half City', roast: 'light'},
    { name: 'Cinnamon', roast: 'light'},
    { name: 'City', roast: 'medium'},
    { name: 'American', roast: 'medium'},
    { name: 'Breakfast', roast: 'medium'},
    { name: 'High', roast: 'dark'},
    { name: 'Continental', roast: 'dark'},
    { name: 'New Orleans', roast: 'dark'},
    { name: 'European', roast: 'dark'},
    { name: 'Espresso', roast: 'dark'},
    { name: 'Viennese', roast: 'dark'},
    { name: 'Italian', roast: 'dark'},
    { name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
