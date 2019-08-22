const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');


(async function example() {
  var loop = true;
  var contador = 0;

  while (loop) {
    contador++;
    await verificar(contador);
  }
})();

function alerta(cont) {
  console.log("ALERTA - vai comentar! "+cont);
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

async function verificar(contador) {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
  try {
    // await driver.get('http://www.google.com/ncr');
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

    var perfil = 'https://www.instagram.com/lifeboxburger/';
    var comparar = 'https://www.instagram.com/p/B1blb3yn25H/';
    var xpath = '//*[@id="react-root"]/section/main/div/div[3]/article/div[1]/div/div[1]/div[1]/a';

    // para testes
    // perfil = "https://www.instagram.com/_gstvinf/";
    // comparar = "https://www.instagram.com/p/B1dsnwQlhRs/";
    // xpath = '//*[@id="react-root"]/section/main/div/div[2]/article/div/div/div[1]/div[1]/a';

    await driver.get(perfil);

    var link = await driver.findElement(By.xpath(xpath)).getAttribute("href");

    if (link != comparar) {
      var cont = 0;
      while (true) {
        cont++;
        alerta(cont);
        wait(1000);
      }
    }
  } finally {
    console.log("trying again " + contador);
    await driver.quit();
  }
}
