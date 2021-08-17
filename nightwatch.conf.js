module.exports = {
  src_folders: ['tests'],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path,
    cli_args: [
    ],
  },

  test_settings: {
    default: {
      launch_url: 'https://qa2.development.tidepool.org',
      desiredCapabilities: {
        browserName: 'chrome',
        alwaysMatch: {
        },
      },
    },
  },
};
