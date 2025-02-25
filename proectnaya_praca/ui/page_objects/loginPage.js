const { I } = inject();

class LoginPage {
  constructor() {
    this.userNameInput = '[name="username"]';
    this.passwordInput = '[name="password"]';
    this.loginButton = '//*[@id="loginform"]/button';
  }

  goto() {
    I.amOnPage('/');
  }

  fillUsername(username) {
    I.fillField(this.userNameInput, username);
  }

  fillPassword(password) {
    I.fillField(this.passwordInput, password);
  }

  submitLogin() {
    I.click(this.loginButton);
  }
}

module.exports = new LoginPage();