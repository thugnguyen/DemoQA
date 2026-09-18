import { Page, Locator } from "@playwright/test";
export class CheckBoxPage {
    readonly page: Page;
    readonly homeCheckBoxLoc: Locator;
    constructor (page: Page) {
        this.page = page;
        this.homeCheckBoxLoc = page.locator("xpath=//span[@title='Home']//preceding-sibling::span[1]");
    }
    async isHomeChecked(locator: Locator): Promise<boolean> {
        const classAttribute: string = await locator.getAttribute('class') || '';
        if (classAttribute.includes('rc-tree-checkbox-checked')) {
            return true;
        }
        return false;
    }
}