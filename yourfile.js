const puppeteer = require('puppeteer')

const getNavValue = async (Value) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://codequiz.azurewebsites.net/')
  await page.click('input[type="button"]')
  await page.waitForSelector('table', {
    visible: true,
  })
  const html = await page.content()
  const nav = html.match(new RegExp(Value+" </td><td>([\\d\\.]*?)</td>"))[1]
  console.log(nav)
  await browser.close()
}


const Value = process.argv[2] || ''

getNavValue(Value)
