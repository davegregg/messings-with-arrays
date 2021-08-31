"use strict";

console.log(cars)

let carTemplate = document.querySelector(".card")
carTemplate.remove()
carTemplate.classList.remove("invisible")

function createCarCard (currentCar, index) { // We need the cars array index now, so that we can keep track of which index in the array we will need to remove when the user clicks the Remove Car button
  let newCarElement = carTemplate.cloneNode(true)
  newCarElement.dataset.carIndex = index // Here is how we will store the array index on the car card element, so that it is easy to find later when we need it (in our clickHandler() function).

  let headerString = `${currentCar.modelYear} ${currentCar.make} ${currentCar.model}`

  /* <header></header> */
  newCarElement
    .querySelector("header")
    .replaceChildren(headerString)
                            
  /* <span class="car-price">INSERT CAR PRICE HERE</span> */
  newCarElement
    .querySelector(".car-price")
    .replaceChildren(currentCar.price)
  
  /* <span class="car-door-count">INSERT CAR DOOR COUNT HERE</span> */
  newCarElement
    .querySelector(".car-door-count")
    .replaceChildren(currentCar.numberOfDoors)
    
  /* <span class="car-color">INSERT CAR COLOR HERE</span> */
  newCarElement
    .querySelector(".car-color")
    .replaceChildren(currentCar.color)
  
  /* <span class="car-vin">INSERT CAR VIN HERE</span> */
  newCarElement
    .querySelector(".car-vin")
    .replaceChildren(currentCar.vin)

  return newCarElement
}


let mainElement = document.querySelector("main")
for (let index = 0; index < cars.length; index += 1) {
  let currentCar = cars[index]
  
  let cardElement = createCarCard(currentCar, index)
  mainElement.append(cardElement)
}


function addCar (event) {
  event.preventDefault()
  let form = event.target

  let car = {
    "vin": form.vin.value,
    "make": form.make.value,
    "model": form.model.value,
    "color": form.color.value,
    "price": form.price.value,
    "modelYear": form.year.value,
    "numberOfDoors": form["number-of-doors"].value,
  }
  
  cars.push(car)

  let carCardElement = createCarCard(car, cars.length - 1) // pass the array index for the new car object into createCarCard()
  mainElement.prepend(carCardElement)

  form.reset()
}


let addCarForm = document.querySelector("form#add-car")
addCarForm.addEventListener("submit", addCar)



function clickHandler (event) {
  let clickedElement = event.target

  if (clickedElement.matches(".remove")) { // matches() works like querySelector(), but just returns TRUE or FALSE
    let carCardElement = clickedElement.closest(".card") // closest() works like querySelector(), but it starts the search from the clickedElement and search UP the DOM toward parent elements all the way up to the root element (<html>).
    carCardElement.remove() // Remove the card from the DOM
    cars.splice(carCardElement.dataset.carIndex, 1) // Remove the car object from the cars array.
  }
}

document
  .querySelector("main")
  .addEventListener("click", clickHandler)