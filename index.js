import { launch } from "puppeteer";
import { Solver } from "2captcha-ts";
import { readFileSync } from "fs";

const solver = new Solver("d49d49bb671bb67b824371ec60f71513");

const example = async () => {
  // const browser = await launch({
  //     headless: false,
  //     devtools: true
  // })

  // const [page] = await browser.pages()

  // const preloadFile = readFileSync('./inject.js', 'utf8');
  // await page.evaluateOnNewDocument(preloadFile);

  // // Here we intercept the console messages to catch the message logged by inject.js script
  // page.on('console', async (msg) => {
  //     const txt = msg.text()
  //     console.log("msg ==> ", txt)
  //     if (txt.includes('intercepted-params:')) {
  //         const params = JSON.parse(txt.replace('intercepted-params:', ''))
  //         console.log(params)

  //         try {
  //             console.log(`Solving the captcha...`)
  //             const res = await solver.cloudflareTurnstile(params)
  //             console.log(`Solved the captcha ${res.id}`)
  //             console.log(res)
  //             await page.evaluate((token) => {
  //                 cfCallback(token)
  //             }, res.data)
  //         } catch (e) {
  //             console.log(e.err)
  //             return process.exit()
  //         }
  //     } else {
  //         return;
  //     }
  // })
  // page.goto('https://rucaptcha.com/42')

  const browser = await launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('https://sequelize.org/docs/v7/querying/operators/');

  const data = {
    browser,
    page,
  };

  console.log('before==>', data);

  await data.browser.close();
  console.log('after==>', data);
};

example();
