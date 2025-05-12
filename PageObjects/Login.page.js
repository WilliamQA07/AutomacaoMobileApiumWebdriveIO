describe('Login App Test', () => {
    // it('deve fazer login com sucesso', async () => {
    //     const selectUma = await $('//android.widget.ScrollView/android.view.View[1]/android.view.View[2]');
    //     const selectSim = await $('//android.widget.ScrollView/android.view.View[1]');
    //     const selectEnviar = await $('//android.widget.Button');
    //     const selectDez = await $('//android.widget.ScrollView/android.view.View[1]/android.view.View[12]');
    //     await selectUma.click();
    //     await selectSim.click();
    //     await selectEnviar.click();
    //     await selectDez.click();
    //     await selectEnviar.click();
    // });
   it('deve fazer login com sucesso', async () => {
    const selectUma = await $('//android.widget.ScrollView/android.view.View[1]/android.view.View[2]');
    const selectSim = await $('//android.widget.ScrollView/android.view.View[1]');
    const selectEnviar = await $('//android.widget.Button');
    const selectDez = await $('//android.widget.ScrollView/android.view.View[1]/android.view.View[12]');
    
    // Clicar nos elementos
    await selectUma.click();
    await selectSim.click();
    await selectEnviar.click();
    await selectDez.click();
    await selectEnviar.click();

    // Preencher o campo de telefone
    const selectNumero = await $('//android.widget.EditText[@resource-id="phoneInputLogin"]');
    await selectNumero.setValue('88998141112'); // Defina o número diretamente aqui
});


});
