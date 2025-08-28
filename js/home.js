const callHistoryData = []

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


// copy button functionality

// national emergency service copy functionality
document.getElementById("national-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("national-num")

})

// ambulance copy functionality 
document.getElementById("ambulance-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("ambulance-num")

})

// electricity copy functionality  
document.getElementById("electricity-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("electricity-num")

})


// police copy functionality
document.getElementById("police-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("police-num")

})

// women & child helpline copy functionality
document.getElementById("child-help-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("child-help-num")

})

// brac copy functionality  
document.getElementById("brac-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("brac-num")

})


// fire Service copy functionality
document.getElementById("fire-service-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("fire-service-num")

})

// anti corruption copy functionality
document.getElementById("corruption-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("corruption-num")

})

// bangladesh railway copy functionality  
document.getElementById("railway-copy-button").addEventListener("click", function (e) {
    e.preventDefault

    copyCount("copy-button")
    copy("railway-num")

})



// national emergency service call functionality
document.getElementById("national-call-button").addEventListener("click", function (e) {
    e.preventDefault

    const callContainer = document.getElementById("call-history-container")

})

// // ambulance call functionality 
// document.getElementById("ambulance-copy-button").addEventListener("click", function (e) {
//     e.preventDefault

//     copyCount("copy-button")
//     copy("ambulance-num")

// })

// // electricity call functionality  
// document.getElementById("electricity-copy-button").addEventListener("click", function (e) {
//     e.preventDefault

//     copyCount("copy-button")
//     copy("electricity-num")

// })


// // police call functionality
// document.getElementById("police-copy-button").addEventListener("click", function (e) {
//     e.preventDefault

//     copyCount("copy-button")
//     copy("police-num")

// })

// // women & child helpline call functionality
// document.getElementById("child-help-copy-button").addEventListener("click", function (e) {
//     e.preventDefault

//     copyCount("copy-button")
//     copy("child-help-num")

// })

// // brac call functionality  
// document.getElementById("brac-copy-button").addEventListener("click", function (e) {
//     e.preventDefault

//     copyCount("copy-button")
//     copy("brac-num")

// })


// // fire Service call functionality
// document.getElementById("fire-service-copy-button").addEventListener("click", function (e) {
//     e.preventDefault

//     copyCount("copy-button")
//     copy("fire-service-num")

// })

// // anti corruption call functionality
// document.getElementById("corruption-copy-button").addEventListener("click", function (e) {
//     e.preventDefault

//     copyCount("copy-button")
//     copy("corruption-num")

// })

// // bangladesh railway call functionality  
// document.getElementById("railway-copy-button").addEventListener("click", function (e) {
//     e.preventDefault

//     copyCount("copy-button")
//     copy("railway-num")

// })

