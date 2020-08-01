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

const studentArray = []

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

  document.querySelector('#formBtn').addEventListener('click', buildStudent)
  document.querySelector('#formBtn').addEventListener('click', buildCards)
}

const buildStudent = (e) => {
  let buttonId = e.target.id;
  let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];

  if (buttonId === 'formBtn') {
    studentArray.push({name: `${inputStudent.value}`, house: `${randomHouse}`})
  }
}

const buildCards = (e) => {
    let buttonId = e.target.id;
    let domString = ''
    
    if (buttonId === 'formBtn'){
      for (let i = 0; i < studentArray.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-name">${studentArray[i].name}</h5>
    <p class="card-text">${studentArray[i].house}</p>
    <a href="#" class="btn btn-primary">Expel</a>
  </div>
</div>`
    }
  }

printToDom('studentCards', domString)

    }


    const buttonEvents = () => {
      document.querySelector('#startBtn').addEventListener('click', buildForm)
    }


const init = () => {
    buttonEvents();
}

init();