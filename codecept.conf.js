const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/ui/features/*.feature',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io/login',
      show: true,
      browser: 'chromium'
    }
  },
  gherkin: {
    features: './e2e/ui/features/*.feature',
    steps: ['./e2e/ui/steps/login.steps.js']
  },
  include: {
    I: './e2e/ui/steps_file.js',
    LoginPage: './e2e/ui/page_objects/LoginPage.js',
    ErrorPage: './e2e/ui/page_objects/ErrorPage.js'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    }
  },
  name: 'm.dukhovich'
}
