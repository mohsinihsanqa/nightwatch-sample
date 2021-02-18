const SCREENSHOT_PATH = "./screenshots/";
const BINPATH = "./node_modules/nightwatch/bin/";

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  // "globals_path": "./test/pom/keywords.js",
  src_folders: [
    "scripts/test", // Where you are storing your Nightwatch e2e tests
  ],
  output_folder: "./reports", // reports (test outcome) output by nightwatch
  selenium: {
    // downloaded by selenium-download module (see readme)
    start_process: true, // tells nightwatch to start/stop the selenium process
    server_path:
      "./node_modules/nightwatch/bin/selenium-server-standalone-3.141.59.jar", // the standard alone selenium server jar
    host: "127.0.0.1",
    port: 4444, // standard selenium port
    cli_args: {
      // chromedriver is downloaded by selenium-download (see readme)

      "webdriver.chrome.driver": "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe", //chromedriver location
    },
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true, // if you want to keep screenshots
        path: SCREENSHOT_PATH, // save screenshots here
      },
      globals: {
        waitForConditionTimeout: 5000, // sometimes internet is slow so wait.
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true, // turn off to test progressive enhancement
        chromeOptions: {
          args: [],
        },
        selenium: {
          cli_args: {
            "webdriver.chrome.driver":
              "./node_modules/chromedriver/lib/chromedriver.exe",
          },
        },
      },
    },
  },
};
