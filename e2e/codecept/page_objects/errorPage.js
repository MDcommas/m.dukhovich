const { I } = inject()

class ErrorPage {
  constructor() {
    this.errorMessage = 'div.message.danger'
  }

  async getErrorText() {
    return I.grabTextFrom(this.errorMessage)
  }
}

module.exports = new ErrorPage()
