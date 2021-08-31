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
  
  let article = createCarCard(currentCar)
  mainElement.append(article)
}