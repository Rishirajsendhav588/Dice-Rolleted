let button = document.querySelector("button")
let dicOne = document.getElementById("dice-one")
let dicTwo = document.getElementById("dice-two")
let h1 = document.querySelector("h1")
let totalwins = document.querySelector("#total_wins")
let totalLost = document.querySelector("#total_lost")
let totalGames = document.querySelector("#total_games")

const iconsArray = [
    "", 
    "fa-solid fa-dice-one", 
    "fa-solid fa-dice-two", 
    "fa-solid fa-dice-three", 
    "fa-solid fa-dice-four", 
    "fa-solid fa-dice-five", 
    "fa-solid fa-dice-six"
];

const rollDice = () => {
    return Math.floor(Math.random() * 6 + 1)
}

const games = []

// Function to update stauts UI 
const updateStats = () => {
    const wins = games.filter(game => game === "win").length
    const losses = games.filter(game => game === "loose").length

    totalwins.innerText = `Total wins: ${wins}`
    totalLost.innerText = `Total Lost: ${losses}`
    totalGames.innerText = `Total Games: ${games.length}/10`
}

// Function to update Dynamic Theme / Background Color 
const updateTheme = (status) => {
    if (status === "win") {
        document.body.style.backgroundColor = "#2e7d32";
        document.body.style.color = "#ffffff";
    } else if (status === "loose") {
        document.body.style.backgroundColor = "#c62828";
        document.body.style.color = "#ffffff";
    } else {
        document.body.style.backgroundColor = "#1565c0";
        document.body.style.color = "#ffffff";
    }
}

const Playgame = () => {
    if (games.length < 10) {
        let dicOneResult = rollDice()
        let dicTwoResult = rollDice()
        let Result = dicOneResult + dicTwoResult
        console.log(dicOneResult, dicTwoResult, Result)
        dicOne.style.transform = "rotate(240deg)"
        dicTwo.style.transform = "rotate(240deg)"

        setTimeout(() => {
            dicOne.style.transform = "rotate(0deg)"
            dicTwo.style.transform = "rotate(0deg)"
        }, 300)

        dicOne.className = iconsArray[dicOneResult]
        dicTwo.className = iconsArray[dicTwoResult]

        if (Result === 2 || Result === 6 || Result === 12) {
            h1.innerText = "Winners"
            games.push("win")
            updateTheme("win")
        } else if (Result === 3 || Result === 5 || Result === 7) {
            h1.innerText = "Loser"
            games.push("loose")
            updateTheme("loose")
        } else {
            h1.innerText = "Roll Again"
            updateTheme("draw")
        }

    
        updateStats()

    } else {
        window.alert("Game Finished! Final Score updated.")
    }
}

button.addEventListener("click", Playgame);