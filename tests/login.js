module.exports = {
    'Login with valid credentials': function (browser) {
      browser
        .url('https://99sfo4.mydwsite3.com/')
        .windowMaximize()
        .waitForElementVisible(".menu__link--icon .fa-user")
        .pause(1000)
        browser.moveToElement('.menu__link--icon .fa-user', 10, 10) // mousehover the element
        .waitForElementVisible(".btn--full[for='SignInModalTrigger']")
        .click(".btn--full[for='SignInModalTrigger']")
        .waitForElementVisible("#LoginUsername[name='username']")
        .setValue("#LoginUsername[name='username']", 'DemoUser')
        .setValue("#LoginPassword[name='password']", 'DemoUser')
        .assert.visible("button[title='Sign in'] ")
        .click("button[title='Sign in'] ")
        .assert.elementPresent("[title='Customer center'] .circle-icon-btn")
        .end();
          }

        
  };