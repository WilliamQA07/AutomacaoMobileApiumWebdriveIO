/**
 * The Singleton class defines the getInstance method that lets clients access
 * the unique singleton instance.
 */
class StorageData {
    static instance;

    _testKey //getTestKey for Zephyr
    _files = [] //getTestFiles for Evidences
    _data = {}
    _pnr; // Variável para armazenar o PNR

    setData(node, value) {
        this._data[node] = value;
    }
    getData() {
        return this._data;
    }

    setFiles(value) {
        this._files.push(value);
    }
    getFiles() {
        return this._files;
    }
    
    getTestKey() {
        return this._testKey;
    }
    setTestKey(value) {
        this._testKey = value;
    }

    // Adicionar métodos para gerenciar o PNR
    setPnr(value) {
        this._pnr = value;
    }

    getPnr() {
        if (!this._pnr) {
            throw new Error('PNR não foi definido! Certifique-se de que o cenário de emissão foi executado primeiro.');
        }
        return this._pnr;
    }

    /**
     * The Singleton's constructor should always be to prevent direct
     * construction calls with the new operator.
     */
    constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    static getInstance() {
        if (!StorageData.instance) {
            StorageData.instance = new StorageData();
        }
        console.log('Singlenton works!')
        return StorageData.instance;
    }
}

module.exports = StorageData;