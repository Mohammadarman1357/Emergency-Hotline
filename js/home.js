// function for heart count
function heart() {
    const heartIcon = document.getElementById("heart-count")
    const heartValue = heartIcon.innerText
    const heartValueNumber = parseInt(heartValue)

    const heartNewValue = heartValueNumber + 1;
    heartIcon.innerText = heartNewValue;
}

// function for copy count

function copyCount(id) {

    const copyNum = document.getElementById(id)
    const copyValue = copyNum.innerText
    const copyNumber = parseInt(copyValue)

    const copyNewNumber = copyNumber + 1;
    copyNum.innerText = copyNewNumber
}

// function for copy hotline number

function copy(id) {

    const nationalNum = document.getElementById(id)
    const nationalNumber = nationalNum.innerText

    navigator.clipboard.writeText(nationalNumber)
    alert("নম্বর কপি হয়েছে : " + nationalNumber)

}


// national emergency service
document.getElementById("national-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("national-num")

})

// ambulance 
document.getElementById("ambulance-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("ambulance-num")

})

// electricity  
document.getElementById("electricity-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("electricity-num")

})


// police
document.getElementById("police-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("police-num")

})

// women & child helpline
document.getElementById("child-help-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("child-help-num")

})

// brac  
document.getElementById("brac-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("brac-num")

})


// fire Service
document.getElementById("fire-service-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("fire-service-num")

})

// anti corruption
document.getElementById("corruption-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("corruption-num")

})

// bangladesh railway  
document.getElementById("railway-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("railway-num")

})

