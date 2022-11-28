
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking the draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)

    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()

    expect(displayed).toBe(true)
})