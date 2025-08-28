// function for heart count
function heart() {
    const heartIcon = document.getElementById("heart-count")
    const heartValue = heartIcon.innerText
    const heartValueNumber = parseInt(heartValue)

    const heartNewValue = heartValueNumber + 1;
    heartIcon.innerText = heartNewValue;
}

// copy

function copy() {
    const hotline = document.getElementById("copy-button")
    const hotlineValue = hotline.innerText
    const hotlineNumber = parseInt(hotlineValue)

    const hotlineNewNumber = hotlineNumber + 1;
    hotline.innerText = hotlineNewNumber

    const nationalNum = document.getElementById("national-num")
    const nationalNumValue = nationalNum.innerText
    const nationalNumber = parseInt(nationalNumValue)

    navigator.clipboard.writeText(nationalNumber)
    alert("নম্বর কপি হয়েছে : " + nationalNumber)
}


// national emergency
document.getElementById("national-button").addEventListener("click", function (e) {
    e.preventDefault


})