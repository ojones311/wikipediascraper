const puppeteer = require('puppeteer')

const url = 'https://en.wikipedia.org/wiki/Portal:Current_events'

// Start browser instance with puppeteer and open a blank page

let selector = ''

const scrapeData = async () => {
    let browser;
    let page;
    try{
        browser = await puppeteer.launch({
            headless: false,
        });
        page = await browser.newPage()
        await page.goto(url, {waitUntil: 'domcontentloaded'})
        const currentEvents = await page.$$eval(selector, divs => {

        })
    }catch(error){
        console.log('Couldnt create browser instance')
    }
    
    
}


const getDate = () => {
    const options = {
        month: 'long',
        day: 'numeric'
    }
    let today = new Date()

    return today.toLocaleDateString('en-US',options)
}

console.log(getDate())