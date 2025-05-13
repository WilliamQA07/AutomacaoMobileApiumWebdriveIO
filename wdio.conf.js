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
    'appium:noReset': false,  // Isso garante que o Appium não mantenha o estado do app entre os testes
    'appium:fullReset': true, // Isso limpa o cache e dados do aplicativo antes de iniciar
    'appium:autoGrantPermissions': true
  }],


  hostname: '127.0.0.1',
  port: 4723,
  path: '/wd/hub',

  waitforTimeout: 30000,  // Aumente o timeout para 30 segundos
  connectionRetryTimeout: 120000,  // Timeout para tentar a conexão
  connectionRetryCount: 3,
}

