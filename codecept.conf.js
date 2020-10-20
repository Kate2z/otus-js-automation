const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './homework5/*_test.js',
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
    }
  },
  include: {
    I: './steps_file.js',
    registerFormPage: './homework5/pages/registerForm.js',
    successRegister: './homework5/pages/successRegister.js',
    settingsPage: './homework5/pages/settingsPage.js',
    successPassChange: './homework5/pages/successPassChange.js',
    loginFormPage: './homework5/pages/loginForm.js',
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