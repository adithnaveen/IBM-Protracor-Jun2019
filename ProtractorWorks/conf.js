var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  // specs: ['./tests/todo-spec-01.js', './tests/LoginPageWithPOM.js'],
  specs: ['./tests/WebTable07.js'],

  // to have wild card characters used for invoking multiple specs 
  // specs: ['./tests/*_spec.js'],


  framework: 'jasmine2',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ["--headless"]
    }

  },
  // multiCapabilities: [{
  //   browserName: 'firefox',
  //   count: 2
  //      }, {
  //   browserName: 'chrome',
  //   count: 3
  // }],
  onPrepare: function () {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(20000);

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots',
        screenshotsFolder: 'images',
        cleanDestination: false
      })
    );
  }

};