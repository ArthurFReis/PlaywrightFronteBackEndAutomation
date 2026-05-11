
import { Page, expect, Locator } from '@playwright/test';

export class NavegationPage {
    
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
        
    }
    async saucedemo(){
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    }

    async saucedemoInventory(){
        await this.page.goto('https://www.saucedemo.com/inventory.html');
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    async brasilApibanks(){
        await this.page.goto('https://brasilapi.com.br/api//banks/v1');
        await expect(this.page).toHaveURL('https://brasilapi.com.br/api//banks/v1');
    }

    async brasilApiCep(){
        await this.page.goto('https://brasilapi.com.br/api/cep/v1/89010025');
        await expect(this.page).toHaveURL('https://brasilapi.com.br/api/cep/v1/89010025');
    }

    } 