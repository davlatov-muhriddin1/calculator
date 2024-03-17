let currentOperand = ''
let previousOperand = ''
let operation = ''

const btnNumbers = document.querySelectorAll(".btn"),
  btnOperations = document.querySelectorAll(".operation"),
  equal = document.querySelector(".equal"),
  clear = document.querySelector('.clear'),
  remove = document.querySelector(".delete"),
  previousDisplay = document.querySelector('.previous'),
  currentDisplay = document.querySelector('.current')

// adding screen number
btnNumbers.forEach((btnNumber) => btnNumber.addEventListener('click', addingValueScreen))

function addingValueScreen(e) {
  if (e.target.innerText == '.' && currentDisplay.textContent.includes('.') || e.target.innerText == '.' && currentDisplay.textContent == '') return
  if(e.target.innerText == '0' && currentOperand == '0') return
  if (currentOperand == '0' && e.target.innerText != '0' && e.target.innerText != '.') {
    currentOperand = e.target.innerText
  } else {
    currentOperand += e.target.innerText
  }
  currentDisplay.textContent = currentOperand
}

// clear screen
clear.addEventListener("click", clearScreen)

function clearScreen() {
  currentOperand = ''
  currentDisplay.textContent = ''
  previousOperand = ''
  previousDisplay.textContent = ''
}

// remove last number

remove.addEventListener('click', removeLastNumber)

function removeLastNumber() {
  currentOperand.slice(0, -1)
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
}

// adding screen operation

btnOperations.forEach((btnOperation) => btnOperation.addEventListener('click', addingOperationScreen))

function addingOperationScreen(e) {
  if(currentDisplay.textContent == '') return
  if(previousOperand.includes(operation) && previousDisplay.textContent !== '') return

  operation = e.target.innerText
  previousOperand += currentDisplay.textContent + operation
  previousDisplay.textContent = previousOperand
  currentDisplay.textContent = ''
  currentOperand = ''
}

// calculate
equal.addEventListener('click', calculate)

function calculate() {
  previousOperand = parseFloat(previousOperand)
  currentOperand = parseFloat(currentOperand)
  switch (operation) {
    case '+':
      currentDisplay.textContent = previousOperand + currentOperand
      break
    case '-':
      currentDisplay.textContent = previousOperand - currentOperand
      break
    case '*':
      currentDisplay.textContent = previousOperand * currentOperand
      break
    case '/':
      currentDisplay.textContent = previousOperand / currentOperand
      break
  }
  previousDisplay.textContent = ''
  previousOperand = ''
  currentOperand = ''
  operation = ''
}