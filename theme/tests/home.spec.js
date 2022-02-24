const { loginAndLazyLoadScroll } = require("./utilities");
const { test, expect } = require("@playwright/test");
const { aemSite } = require("../live.playwright.config");
const inquirer = require("inquirer");

const questions = [
  { type: "input", name: "answer", message: "This is the input!" },
];

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

test("home", async ({ page }) => {
  await page.goto(`/content/${aemSite}/en/home.html`);

  await loginAndLazyLoadScroll(page);

  // console.log('🚀', expect().extractExpectedAssertionsErrors())

  try {
    expect(
      await page.screenshot({
        fullPage: true,
      })
    ).toMatchSnapshot("home.png");
  } catch (error) {
    console.log("⭕", error.message, "❌");

    if (error.message.includes("Sizes differ; expected image")) {
      console.log("--size error cought--");
    }
    await inquirer.prompt(questions).then((answers) => {
      console.log("this is what was input:", answers.answer);
    });
    console.log("prompt done");
  }

  // page.on('pageerror', (error) => {
  //   console.log('START OF ERROR: ', error, 'END OF ERROR')
  // })
});
