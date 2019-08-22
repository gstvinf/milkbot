const { Builder, By, Key, until } = require("selenium-webdriver");
var Assert = require("assert");

(async function example() {
  var loop = true;
  var retorno = "try again";
  var contador = 0;

  while (loop) {
    contador++;
    await verificar(contador);
    if (retorno != "try again") {
      loop = false;
      alerta();
    }
  }
})();

function alerta() {
  console.log("ALERTA");
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

async function verificar(contador) {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    // await driver.get('http://www.google.com/ncr');
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

    var perfil = 'https://www.instagram.com/lifeboxburger/';
    var comparar = 'https://www.instagram.com/p/B1blb3yn25H/';
    var xpath = '//*[@id="react-root"]/section/main/div/div[3]/article/div[1]/div/div[1]/div[1]/a';

    // para testtes
    // perfil = "https://www.instagram.com/_gstvinf/";
    // comparar = "https://www.instagram.com/p/B1dsnwQlhRs/";
    // xpath = '//*[@id="react-root"]/section/main/div/div[2]/article/div/div/div[1]/div[1]/a';

    await driver.get(perfil);

    wait(500);

    var link = await driver.findElement(By.xpath(xpath)).getAttribute("href");

    await Assert.equal(link, comparar, "COMENTAAAAA!");
  } finally {
    console.log("try again " + contador);
    await driver.quit();
  }
}
