const { Builder, By, Key, until } = require("selenium-webdriver");
var Assert = require("assert");

(async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    // await driver.get('http://www.google.com/ncr');
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

    await driver.get("https://www.instagram.com/lifeboxburger/");

    wait(500);

    var link = await driver
      .findElement(
        By.xpath(
          '//*[@id="react-root"]/section/main/div/div[3]/article/div[1]/div/div[1]/div[1]/a'
        )
      )
      .getAttribute("href");
    await console.log(link);
    var comparar = "https://www.instagram.com/p/B1blb3yn25H/";

    await Assert.equal(link, comparar, "COMENTAAAAA!");
  } finally {
    console.log('try again');
    await driver.quit();
  }
})();

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
