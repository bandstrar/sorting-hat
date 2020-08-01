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
    domString += `<div class="form-inline">
    <div class="form-group mb-2">
      <label for="staticStudent" class="sr-only">Student</label>
      <input type="text" readonly class="form-control-plaintext" id="staticStudent" value="Student:">
    </div>
    <div class="form-group mx-sm-3 mb-2">
      <label for="inputStudent" class="sr-only">Student</label>
      <input type="text" class="form-control" id="inputStudent" placeholder="Ron Weasley">
    </div>
    <button type="submit" class="btn btn-primary mb-2" id="formBtn">Sort!</button>
  </div>`

  printToDom('sortForm', domString);
}

const buildStudent = (e) => {
  let buttonId = e.target.id;
  let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];

  if (buttonId === 'formBtn') {
    studentArray.push({name: inputStudent.value, house: randomHouse})
  }
  buildCards(studentArray);
}

const buildCards = (arrayGrabber) => {
    let domString = ''
    
      for (let i = 0; i < arrayGrabber.length; i++) {
    domString += `<div class="card" style="width: 18rem;" id="${i}">
    <div class="card-body">
    <h5 class="card-name">${arrayGrabber[i].name}</h5>
    <p class="card-text">${arrayGrabber[i].house}</p>
    <button type="button" class="btn btn-primary" id="${i}">Expel</button>
  </div>
</div>`
  }

printToDom('studentCards', domString)
document.getElementById('inputStudent').value = '';
    }

  const expelStudent = (e) => {
      const ctype = e.target.type;
      const target = e.target.id;
  
  
      if (ctype === 'button') {
          studentArray.splice(target, 1);

          buildCards(studentArray)
      }
    }

    const buttonEvents = () => {
      document.querySelector('#startBtn').addEventListener('click', buildForm)
      document.querySelector('#sortForm').addEventListener('click', buildStudent)
      document.querySelector('#studentCards').addEventListener('click', expelStudent)
    }


const init = () => {
    buttonEvents();
}

init();