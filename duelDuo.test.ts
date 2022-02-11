import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);

  await driver.sleep(3000);
});

test("Draw button -> choices", async () => {
  const drawButton = await driver.findElement(By.id("draw"));
  await drawButton.click();
  const divs = await driver.findElement(By.id("choices"));
  const displaying = await divs.isDisplayed();
  expect(displaying).toBe(true);

  await driver.sleep(5000);
});

test("adding a bot with add to duo button", async () => {
  const drawButton = await driver.findElement(By.id("draw"));
  await drawButton.click();
  const botBtn = await driver.findElement(By.className("bot-btn"));
  await botBtn.click();
  const playerBotHeader = await driver.findElement(By.id("your-duo-header"));
  const isDisplayed = await playerBotHeader.isDisplayed();

  expect(isDisplayed).toBe(true);
  await driver.sleep(5000);
});
