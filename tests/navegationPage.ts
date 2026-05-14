
import { Page, expect, Locator } from '@playwright/test';

export class NavegationPage {
    
    readonly page: Page;
    readonly userename: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.userename = this.page.locator('[data-test="username"]');
        this.password = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');

    }
    async saucedemo(){
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    }

} 