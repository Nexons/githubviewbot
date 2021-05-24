let i = 0;
let o = 0;

const amountOfWorkers = 5 //WARNING: CHANGING THIS NUMBER WILL RIP THROUGH YOUR CPU AND MEMORY USAGE
const url = 'YOURURL' //PASTE YOUR GITHUB VIEWING EMBED LINK HERE
//example url: https://camo.githubusercontent.com/646818f22ec4339458b19515f3a142ffd3a81fbf7947ff526a3ca26c81003c16/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e65786f6e73267374796c653d666c61742d737175617265
async function botView(page) {
    await page.reload()
    botView(page)
}
async function newWorker() {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const page2 = await browser.newPage()
    const page3 = await browser.newPage()
    const page4 = await browser.newPage()
    const page5 = await browser.newPage()
    await page.goto(url);
    botView(page), botView(page2), botView(page3), botView(page4), botView(page5)
}

async function fireWorkers() {
    if(o < amountOfWorkers) {
        o++
        newWorker()
        console.log(`[INFO]: WORKER ${o} HAS STARTED UP`)
        fireWorkers()
    }
    else return console.log("[INFO]: ALL WORKERS HAVE BEEN FIRED UP! PLEASE CHECK YOUR GITHUB!")
}

fireWorkers()