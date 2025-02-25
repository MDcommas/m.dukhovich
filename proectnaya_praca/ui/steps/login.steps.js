const { I, LoginPage, ErrorPage } = inject();
const assert = require('assert');

Given('I am on the login page', () => {
  LoginPage.goto();
});

When('I fill the username {string}', (username) => {
  LoginPage.fillUsername(username);
});

When('I fill the password {string}', (password) => {
  LoginPage.fillPassword(password);
});

When('I submit the login form', () => {
  LoginPage.submitLogin();
});

Then('I see {string} on the page', (text) => {
  I.see(text);
});

Then('I see {string} on the error message', async (text) => {
  const errorText = await ErrorPage.getErrorText();
  assert.strictEqual(errorText, text);
});