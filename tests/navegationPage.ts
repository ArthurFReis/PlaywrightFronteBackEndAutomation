
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

} 