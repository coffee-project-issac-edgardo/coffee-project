"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<div class="coffee-name-font col-6"><h2>' + coffee.name;
    html += '<small class="coffee-roast-font">' + coffee.roast + '</small></h2></div>';

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
        // e.preventDefault(); // don't submit the form, we just want to update the data
        let selectedRoast = roastSelection.value;
        let filteredCoffees = [];

        if(e === 'all') {
            coffees.forEach(function (coffee) {
                filteredCoffees.push(coffee);
            })
        } else coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(value) {
    let filteredCoffees = [];
    for (let i = 0; i < coffees.length; i++) {
        if(coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) >  -1) {
            filteredCoffees.push(coffees[i]);
        }

    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function addCoffee() {
    let coffee = {
        name: '',
        roast: '',
    };

    let newCoffee =document.getElementById('add-coffee-name').value;
    coffee.name = formatNewCoffee(newCoffee);
    coffee.roast = document.getElementById('add-coffee-roast-select').value;
    coffees.push(coffee);
    arrangeCoffee()
    tbody.innerHTML = renderCoffees(coffees);
}
    function arrangeCoffee() {
    coffees.sort(function (a,b) {
        return a.id - b.id
    });
    coffees.reverse();
    }

    function formatNewCoffee(input) {
    return input.replace(/\b\w/g, function (letter) {
        return letter.toUpperCase()
    })
    }


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let submitButton2 = document.querySelector('#add-coffee')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

submitButton2.addEventListener('click', addCoffee)

