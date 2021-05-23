# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

Within a Github action that runs whenever code is pushed & Manually run them locally before pushing code

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I won't because the message feature consists of multiple units, which will make testing each scenario very difficult and complex. Put it in simple word, this feature is too big for a unit test. It belongs to e2e test. 

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, I would, because the max message length feature is a unit small enough that can be individually tested.

1. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

If headless is set to true, the simulated browser window will not show up.

2. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
    await page.click("header img");
});
