'use strict'

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const houseArray = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin'
]
const randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];

const buildForm = () => {
    let domString = '';

    domString += `<h2 id="firstYear">Enter First Year's Name</h2>`
    domString += `<form class="form-inline">
    <div class="form-group mb-2">
      <label for="staticStudent" class="sr-only">Student</label>
      <input type="text" readonly class="form-control-plaintext" id="staticStudent" value="Student:">
    </div>
    <div class="form-group mx-sm-3 mb-2">
      <label for="inputStudent" class="sr-only">Student</label>
      <input type="text" class="form-control" id="inputStudent" placeholder="Ron Weasley">
    </div>
    <button type="submit" class="btn btn-primary mb-2" id="formBtn">Sort!</button>
  </form>`

  printToDom('sortForm', domString);
}

const buildCards = (e) => {
    let buttonId = e.target.id;
    let domString = ''
    if (buttonId === 'formBtn')
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-name">${inputStudent}.value</h5>
    <p class="card-text">${randomHouse}</p>
    <a href="#" class="btn btn-primary">Expel</a>
  </div>
</div>`

printToDom('studentCards', domString)
    }



const buttonEvents = () => {
    const startButtonEvent = document.querySelector('#startBtn').addEventListener('click', buildForm)
    document.querySelector('#startBtn').addEventListener('click', buildForm)
    if (startButtonEvent) {
    document.querySelector('#formBtn').addEventListener('click', buildCards)
    }
}

const init = () => {
    buttonEvents();
}

init();