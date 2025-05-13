const StorageData = require('../Utils/data');
const fs = require('fs/promises');
const path = require('path');

class Utils {
  async takeScreenshot(fileName) {
    const idRandom = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    fileName = fileName.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    
    // Caminho absoluto para salvar as capturas de tela dentro de "Evidências"
    const directoryPath = path.join('C:', 'Workspace', 'ProjetoAutomacaoMobile', 'Evidências');
    
    // Criando a pasta se ela não existir
    await fs.mkdir(directoryPath, { recursive: true });

    // Nome final do arquivo com o id aleatório e o nome do arquivo
    let finalName = `${idRandom} ${fileName}`;
    
    // Salvando a captura de tela no diretório especificado
    await browser.saveScreenshot(path.join(directoryPath, `${finalName}.png`));
  }
}

module.exports = new Utils();
