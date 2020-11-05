const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './homework6/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: false,
      windowSize: '',
      chrome: {
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--lang=ru-RU,ru',
            '--use-fake-ui-for-media-stream',
        ],
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
    testomat: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: 'z629883f01tv',
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}