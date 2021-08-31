"use strict";

/*
    A car object looks like:
    {
        "id": 1,
        "make": "Volkswagen",
        "model": "Jetta",
        "modelYear": 2011,
        "color": "Purple",
        "numberOfDoors": 2,
        "price": "$5325.89",
        "vin": "1G4CW54K844908680"
    }
*/

console.log(cars)

// Most professional projects are rewritten from scratch at least once. What? WHY?!
// - You don't really understand the problem until you have solved it at least once.
// - Make it more readable.
// - Make it more efficient.
// - Make it prettier.
function createCarCard (currentCar) {
  let article = document.createElement("article")
  let header = document.createElement("header")
  let ul = document.createElement("ul")
  let priceItem = document.createElement("li")
  let doorCountItem = document.createElement("li")
  let colorItem = document.createElement("li")
  let vinItem = document.createElement("li")
  let removeButton = document.createElement("button")

  article.classList.add("card")

  header.append(`${currentCar.make} ${currentCar.model} (${currentCar.modelYear})`)
  article.append(header)

  article.append(ul)
  ul.append(priceItem, doorCountItem, colorItem, vinItem)

  let priceLabel = document.createElement("strong") // <strong></strong>
  priceLabel.append("Price:") // <strong>Price:</strong>
  priceItem.append(priceLabel, ` ${currentCar.price}`) // <li><strong>Price:</strong> $1235.98</li>

  let doorCountLabel = document.createElement("strong")
  doorCountLabel.append("Door Count:")
  doorCountItem.append(doorCountLabel, ` ${currentCar.numberOfDoors}`)

  let colorLabel = document.createElement("strong")
  colorLabel.append("Color:")
  colorItem.append(colorLabel, ` ${currentCar.color}`)

  let vinLabel = document.createElement("strong")
  vinLabel.append("VIN:")
  vinItem.append(vinLabel, ` ${currentCar.vin}`)

  removeButton.append("Remove")
  removeButton.classList.add("remove")
  article.append(removeButton)

  return article
}


let mainElement = document.querySelector("main")
for (let index = 0; index < cars.length; index += 1) {
  let currentCar = cars[index]
  
  let cardElement = createCarCard(currentCar)
  mainElement.append(cardElement)
}


function addCar (event) {
  event.preventDefault()
  let form = event.target

  let vin = form.vin.value
  let make = form.make.value
  let model = form.model.value
  let color = form.color.value
  let price = form.price.value
  let year = form.year.value
  let doorCount = form["number-of-doors"].value

  let car = {
    vin,
    make,
    model,
    color,
    price,
    "modelYear": year,
    "numberOfDoors": doorCount,
  }

  cars.push(car)
  let carCardElement = createCarCard(car)
  mainElement.prepend(carCardElement)

  form.reset() // Clear the form so that it is ready for the user to enter new car information.
}

let addCarForm = document.querySelector("form#add-car")
addCarForm.addEventListener("submit", addCar)