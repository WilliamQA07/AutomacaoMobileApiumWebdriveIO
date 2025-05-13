describe('Login App Test', () => {
    const { takeScreenshot } = require('../Utils/Utils'); // Certifique-se de que o caminho está correto para o seu arquivo Utils.js


    // const newLocal = it('deve fazer login com sucesso - Passo 1', async () => {
    //     // Selecionando os elementos para a interação
    //     const selectUma = await $('//android.widget.ScrollView/android.view.View[1]/android.view.View[2]');
    //     const selectSim = await $('//android.widget.ScrollView/android.view.View[1]');
    //     const selectEnviar = await $('//android.widget.Button');
    //     const selectDez = await $('//android.widget.ScrollView/android.view.View[1]/android.view.View[12]');

    //     // Interagindo com os elementos (passo 1 do teste)
    //     await selectUma.click();
    //     await selectSim.click();
    //     await selectEnviar.click();
    //     await selectDez.click();
    //     await selectEnviar.click();
    // });

    it('deve fazer login com sucesso - Passo 2', async () => {
        // Verificar se a tela de introdução está visível
        const textTela1 = await $('//android.widget.TextView[@resource-id="com.wilyapp:id/intercom_toolbar_title"]');
        const selectX = await $('//android.widget.ImageButton[@content-desc="Close"]');
        const selectNumero = await $('//android.widget.EditText[@resource-id="phoneInputLogin"]');

        if (await textTela1.isDisplayed()) {
            // Caso a tela de introdução apareça, aguarda e clica no "X" para fechar
            await selectX.waitForDisplayed({ timeout: 30000 });
            await selectX.click();
        } else {
            // Caso contrário, preenche diretamente o campo de telefone
            await selectNumero.waitForDisplayed({ timeout: 30000 });
            await selectNumero.setValue('88998141112');
            await takeScreenshot('login_numero_inserido');

        }
    });
});
