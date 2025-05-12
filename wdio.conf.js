exports.config = {

  logLevel: 'debug',
  specs: [
    './PageObjects/**/*.js'
  ],
  

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:app': 'C:/APK/wily-app.apk',  // Caminho sem espaços
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.wilyapp',
    'appium:appActivity': 'com.wilyapp.MainActivity',
    'appium:noReset': false,  // Isso força o Appium a não reter o estado do aplicativo
    'appium:fullReset': true, // Isso limpa o cache e dados do aplicativo antes de iniciar
    'appium:autoGrantPermissions': true
  }],

  hostname: '127.0.0.1',
  port: 4723,
  path: '/wd/hub',

  waitforTimeout: 30000, 
}

