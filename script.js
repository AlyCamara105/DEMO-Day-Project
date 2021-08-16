
//call buttons
let gameButton = document.querySelector("#Games")
let homeButton = document.querySelector("#Home")
let donationButton = document.querySelector("#Donations")
let charitieButton = document.querySelector("#Charities")
let contactButton = document.querySelector("#Contact")

// let canvas = document.querySelector("")

//call pages
let headerSection = document.querySelector("#Header")
let gameSection = document.querySelector("#gamePage")
let donationSection = document.querySelector("#donationPage")
let charitieSection = document.querySelector("#chartitiesPage")
let contactSection = document.querySelector("#contactPage")
let homeSection = document.querySelector("#homePage")
let trashGame = document.querySelector("#TrashGame")

//Game Button/page

gameButton.onclick = function(event) {
    event.preventDefault();
    
    headerSection.style.display ="none"
    gameSection.style.display = "block"
    homeSection.style.display = "none"
    charitieSection.style.display = "none"
    donationSection.style.display = "none"
    contactSection.style.display = "none"
    trashGame.style.display = "block"

    gameSection.appendChild(trashGame);

}

//Donations Button 

donationButton.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="none"
    gameSection.style.display = "none"
    charitieSection.style.display = "none"
    donationSection.style.display = "block"
    contactSection.style.display = "none"
    homeSection.style.display = "none"
    trashGame.style.display = "none"
}

//Charities Button

charitieButton.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="none"
    gameSection.style.display = "none"
    charitieSection.style.display = "block"
    donationSection.style.display = "none"
    contactSection.style.display = "none"
    homeSection.style.display = "none"
    trashGame.style.display = "none"

}

//Contact Us Button

contactButton.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="none"
    gameSection.style.display = "none"
    charitieSection.style.display = "none"
    donationSection.style.display = "none"
    contactSection.style.display = "block"
    homeSection.style.display = "none"
    trashGame.style.display = "none"

}


// Home Button
homeButton.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="block"
    gameSection.style.display = "none"
    charitieSection.style.display = "none"
    donationSection.style.display = "none"
    contactSection.style.display = "none"
    homeSection.style.display = "block"
    trashGame.style.display = "none"

}
