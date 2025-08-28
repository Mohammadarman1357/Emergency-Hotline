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
    e.preventDefault();

    copyCount("copy-button")
    copy("national-num")

})

// ambulance copy functionality 
document.getElementById("ambulance-copy-button").addEventListener("click", function (e) {
    e.preventDefault();

    copyCount("copy-button")
    copy("ambulance-num")

})

// electricity copy functionality  
document.getElementById("electricity-copy-button").addEventListener("click", function (e) {
    e.preventDefault();

    copyCount("copy-button")
    copy("electricity-num")

})


// police copy functionality
document.getElementById("police-copy-button").addEventListener("click", function (e) {
    e.preventDefault();

    copyCount("copy-button")
    copy("police-num")

})

// women & child helpline copy functionality
document.getElementById("child-help-copy-button").addEventListener("click", function (e) {
    e.preventDefault();

    copyCount("copy-button")
    copy("child-help-num")

})

// brac copy functionality  
document.getElementById("brac-copy-button").addEventListener("click", function (e) {
    e.preventDefault();

    copyCount("copy-button")
    copy("brac-num")

})


// fire Service copy functionality
document.getElementById("fire-service-copy-button").addEventListener("click", function (e) {
    e.preventDefault();

    copyCount("copy-button")
    copy("fire-service-num")

})

// anti corruption copy functionality
document.getElementById("corruption-copy-button").addEventListener("click", function (e) {
    e.preventDefault();

    copyCount("copy-button")
    copy("corruption-num")

})

// bangladesh railway copy functionality  
document.getElementById("railway-copy-button").addEventListener("click", function (e) {
    e.preventDefault();

    copyCount("copy-button")
    copy("railway-num")

})



// national emergency service call functionality
document.getElementById("national-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "জাতীয় জরুরি সেবা",
        number: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)


    const callNum = document.getElementById("national-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling National Emergency Service " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }

})

// ambulance call functionality
document.getElementById("ambulance-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "অ্যাম্বুলেন্স",
        number: "1994-999999",
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)

    const callNum = document.getElementById("ambulance-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling Ambulance " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }

})

// electricity call functionality
document.getElementById("electricity-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "বিদ্যুৎ বিভ্রাট",
        number: 16216,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)

    const callNum = document.getElementById("electricity-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling Electricity Outage " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }


})


// police call functionality
document.getElementById("police-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "পুলিশ",
        number: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)

    const callNum = document.getElementById("police-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling Police " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }

})

// women & child helpline call functionality
document.getElementById("child-help-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "নারী ও শিশু সহায়তা",
        number: 109,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)

    const callNum = document.getElementById("child-help-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling Women & Child Helpline " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }

})

// brac call functionality
document.getElementById("brac-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "ব্রাক",
        number: 16445,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)

    const callNum = document.getElementById("brac-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling Brac " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }

})


// fire Service call functionality
document.getElementById("fire-service-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "ফায়ার সার্ভিস",
        number: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)

    const callNum = document.getElementById("fire-service-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling Fire Service " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }


})

// anti corruption call functionality
document.getElementById("corruption-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "দুদক",
        number: 106,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)

    const callNum = document.getElementById("corruption-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling Anti-Corruption " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }

})

// bangladesh railway call functionality
document.getElementById("railway-call-button").addEventListener("click", function (e) {
    e.preventDefault();

    const data = {
        name: "বাংলাদেশ রেলওয়ে",
        number: 163,
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)

    const callNum = document.getElementById("railway-num")
    const callNumValue = callNum.innerText

    const coin = document.getElementById("coin-count")
    const coinValue = coin.innerText
    const coinNumber = parseInt(coinValue)

    const coinNewValue = coinNumber - 20;
    coin.innerText = coinNewValue

    if (coinNumber >= 20) {
        alert("Calling Bangladesh Railway " + callNumValue)
        callHistory();
        return;
    }
    if (coinNumber < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।")
        coin.innerText = 0;
        return;
    }

})


// call history transaction data feature

function callHistory() {
    const callTransactionContainer = document.getElementById("call-history-container")

    callTransactionContainer.innerText = "";

    for (const data of callHistoryData) {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex items-center justify-between p-4 rounded-lg bg-[#fafafa] mb-2">
            <div>
                <h1 class="noto-serif-bengali-font">${data.name}</h1>
                <p class="hind-madurai-font text-[#5c5c5c]">${data.number}</p>
            </div>
            <div>
                <h1 class="text-xs">${data.date}</h1>
            </div>
        </div>
        `
        callTransactionContainer.appendChild(div)

    }
}

// clear button
function clearButton() {
    const element = document.getElementById("call-history-container")
    element.remove();
}