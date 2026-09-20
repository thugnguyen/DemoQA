import { Page, Locator } from "@playwright/test";
export class WebTablePage {
    readonly page: Page
    readonly searchText: Locator;
    constructor (page: Page){
        this.page = page;
        this.searchText = page.locator('#searchBox');
    }
    
}