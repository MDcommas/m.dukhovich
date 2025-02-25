const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/codecept/features/*.feature',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io/login',
      show: true,
      browser: 'chromium'
    }
  },
  gherkin: {
    features: './e2e/codecept/features/*.feature',
    steps: ['./e2e/codecept/steps/login.steps.js']
  },
  include: {
    I: './e2e/codecept/steps_file.js',
    LoginPage: './e2e/codecept/page_objects/LoginPage.js',
    ErrorPage: './e2e/codecept/page_objects/ErrorPage.js'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    }
  },
  name: 'm.dukhovich'
}
