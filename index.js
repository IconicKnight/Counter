let count = 0
let screenCount = 0
let totalWindows = 0
let totalScreens = 0

let windowCountEl = document.getElementById("count-el")
let windowResultEl = document.getElementById("window-el")
let windowTotalEl = document.getElementById("wintotal-el")

let screenCountEl = document.getElementById("screencount-el")
let screenResultEl = document.getElementById("screensave-el")
let screenTotalEl = document.getElementById("screentotal-el")


// console.log(typeof screenCount)

function pane() {
    count += 1
    windowCountEl.textContent = count


}

function screen() {
    screenCount += 1
    screenCountEl.textContent = screenCount



}

function save() {

    let resultEl = count + " - "
    if (count !== 0) {
        windowResultEl.textContent += resultEl
        totalWindows += count
        windowCountEl.textContent = 0
        count = 0
    } else {

    }


    let screens = screenCount + " - "
    if (screenCount !== 0) {
        screenResultEl.textContent += screens
        totalScreens += screenCount
        screenCountEl.textContent = 0
        screenCount = 0
    } else {

    }

    windowTotalEl.textContent = 'Window Total: ' + totalWindows
    screenTotalEl.textContent = 'Screen Total: ' + totalScreens


    console.log('Total Windows: ', totalWindows)
    console.log('Total Screens: ', totalScreens)



    // const windowsArray = resultEl.match(/\d+(\.\d+)?/g).map(parseFloat);
    // const screensArray = screens.match(/\d+(\.\d+)?/g).map(parseFloat);
    // console.log(windowsArray, screensArray)


}


// git hub testing   

console.log()