// function for heart count
function heart() {
    const heartIcon = document.getElementById("heart-count")
    const heartValue = heartIcon.innerText
    const heartValueNumber = parseInt(heartValue)

    const heartNewValue = heartValueNumber + 1;
    heartIcon.innerText = heartNewValue;
}