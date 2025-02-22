const config = {
  testMatch: ['**/specs/**/*.spec.js'],
  coverageProvider: 'v8',
  reporters: [
    'default',
    [
      'jest-allure',
      {
        outputFolder: 'allure-results'
      }
    ],
    ['github-actions', { silent: false }],
    'summary',
    [
      'jest-html-reporters',
      {
        publicPath: './reports/html-report',
        filename: 'index.html'
      }
    ]
  ]
}

module.exports = config
