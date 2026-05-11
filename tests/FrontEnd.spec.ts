import { test, expect, Page } from '@playwright/test';
import { pageResponsivoLogin } from './login';
import { NavegationPage } from './navegationPage'

test.beforeEach(async ({ page }) => {
  let navigationPage = new NavegationPage(page);
  await navigationPage.saucedemo();
  expect(page).toHaveURL('https://www.saucedemo.com/');
});

test.describe.parallel('Login', () => {
  test('login responsivo', async ({ page }) => {
        await pageResponsivoLogin(page);
    });

  test('Teste de preenchimento correto', async ({ page }) => {
     await page.fill('input[placeholder="Username"]', 'standard_user');
     await page.fill('input[placeholder="Password"]', 'secret_sauce');
     if ((await page.getByRole('button').isVisible()) && (await page.getByRole('button').isEnabled())) {
      await page.click('#login-button');
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 
      await page.screenshot({path: "Evidencias/login/Correto/preenchimentoCorretoTotal.png"});
     } 
     else {
      console.log("O botão de login não está visível! \n");
     }
     
  });

    test('Teste usuarios testando o método limpar campos', async ({ page }) => {
      let errors = {"users": ["standard_user1", "stendard", ""], "senha": "secret_sauce"};
      for(const user in errors.users){
        await page.fill('input[placeholder="Username"]', errors.users[user]);
        await page.fill('input[placeholder="Password"]', errors.senha);
        await page.click('#login-button');
        let erroMessage = await page.locator('h3[data-test="error"]').innerText();
        console.log('Erros do método limpar campos: ', erroMessage);
        await page.screenshot({path: `Evidencias/login/TestandoUseuarios/Clean/usuarioErroClean-${errors.users[user]}.png`});
        await page.getByPlaceholder('Username').clear();
        await page.getByPlaceholder('Password').clear();
        await page.fill('input[placeholder="Username"]', errors.users[user]);
        await page.fill('input[placeholder="Password"]', errors.senha);
        await page.click('#login-button');
        await page.getByPlaceholder('Username').clear();
        await page.getByPlaceholder('Password').clear();
      }
  });

     test('Teste usuarios testando o método refresh da página', async ({ page }) => {
      let errors = {"users": ["standard_user1", "stendard", ""], "senha": "secret_sauce"};
      for(const user in errors.users){
        await page.fill('input[placeholder="Username"]', errors.users[user]);
        await page.fill('input[placeholder="Password"]', errors.senha);
        await page.click('#login-button');
        let erroMessage = await page.locator('h3[data-test="error"]').innerText();
        console.log('Erros do método refresh da página: ' + erroMessage);
        await page.screenshot({path: `Evidencias/login/TestandoUseuarios/Refresh/usuarioErroRefresh-${errors.users[user]}.png`});
        await page.reload()
        await page.fill('input[placeholder="Username"]', errors.users[user]);
        await page.fill('input[placeholder="Password"]', errors.senha);
        await page.click('#login-button');
        await page.reload()
      }
  });

});