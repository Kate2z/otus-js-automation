const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './homework6/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '',
      chrome: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        defaultViewport: {
          width: 1280,
          height: 960,
        },
        executablePath: process.env.CHROMIUM_PATH,
      },
    },
    REST: {
      endpoint: "",
    },
  },
  include: {
    I: './steps_file.js',
    registerFormPage: './homework6/pages/registerPage.js',
    personalMainPage: './homework6/pages/personalMainPage.js',
    settingsPage: './homework6/pages/settingsPage.js',
    loginFormPage: './homework6/pages/loginPage.js',
    notificationFragment: './homework6/fragments/notification.js',

  },
  bootstrap: null,
  mocha: {},
  name: 'otus-js-automation',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}