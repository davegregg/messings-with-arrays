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


/* THE TEMPLATE APPROACH? ---

   1. We generate our elements using HTML itself, inside our HTML file (template-version.html).
      Notice how our <article> template is NOT commented out in that HTML file. */

let carTemplate = document.querySelector(".card") // 2. Select our template from the DOM when the page loads.
carTemplate.remove() /* 3. Disconnect this element/template from the DOM,
                           so that the user won't see the "INSERT X HERE" text.
                           Even though this element is no longer on the DOM,
                           it is still in memory, stored in our carTemplate variable,
                           which we can clone any time we need to create a new car card element. */
carTemplate.classList.remove("invisible")

function createCarCard (currentCar) {
  let newCarElement = carTemplate.cloneNode(true) /* 4. We use this to clone the template.
                                                        This will give us the <article> element we need,
                                                        with all the other elements already inside. */
  
  let headerString = `${currentCar.modelYear} ${currentCar.make} ${currentCar.model}`

  /* <header></header> */          // 5. ⬋ We can use querySelector to search WITHIN any element.
  newCarElement                    //    Here we are searching within newCarElement for a <header>.
    .querySelector("header")       //    I don't need to assign this to a variable right now
    .replaceChildren(headerString) //    because I don't need to use this <header> element multiple times.
                    // 6. ⬉ Replace the content of the <header> with our new content!
                            
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

// Notice that we were able to repurpose our createCarCard() function above,
// without needing to change ANY of the code below. This is one of the reasons
// that functions are great for organizing our code and helping us to write
// code which is EASY TO CHANGE!!!

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