const ingredients = [
    {
        id: 1,
        name: "Ciabatta",
        foodType: "Bread",
        intendedRecipe: "Sandwich",
        haveAtHome: true
    },
    {
        id: 2,
        name: "Pesto",
        foodType: "Condiment",
        intendedRecipe: "Sandwich",
        haveAtHome: true
    },
    {
        id: 3,
        name: "Salami",
        foodType: "Meat",
        intendedRecipe: "Sandwich",
        haveAtHome: true
    },
    {
        id: 4,
        name: "Peperoni",
        foodType: "Meat",
        intendedRecipe: "Sandwich",
        haveAtHome: true
    },
    {
        id: 5,
        name: "Mozzarella",
        foodType: "Cheese",
        intendedRecipe: "Sandwich",
        haveAtHome: true
    }
]

const presentInSandwich = []

//below functions together will make a sandwich

const spreadPesto = (foodType) => {
    //code to put condiment (pesto) on the bread
    console.log(`This function will spread pesto on the bread .`)
}
const closeSandwich = (intendedRecipe, haveAtHome) => {
    //code to close and finish the sandwich
    console.log(`This function will close the sandwich.`)
}
const placeSalami = (foodType) => {
    //code to place salami on the sandwich
    console.log(`This function will place salami on the sandwich.`)
}
const placePeperoni = (foodType) => {
    //code to place peperoni on the sandwich
    console.log(`This function will place peperoni on the sandwich.`)
}
const toastBread = (foodType) => {
    //code to toast bread
    console.log(`This function will toast the bread.`)
}
const placeCheese = (foodType) => {
    //code to place cheese on the sandwich 
    console.log(`This function will place mozzarella on the sandwich.`)
}

toastBread()
spreadPesto()
placeSalami()
placePeperoni()
placeCheese()
closeSandwich()