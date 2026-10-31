import { Page, Locator } from "@playwright/test";
export class ModalDialogsPage {
    readonly page: Page;
    readonly btnSmallModal: Locator;
    readonly btnLargeModal: Locator;
    readonly smallModalDialog: string = '//div[@role ="dialog"]';
    readonly largeModalDialog: string = '//div[@role ="dialog"]';

    constructor (page: Page) {
        this.page = page;
        this.btnSmallModal = page.locator('#showSmallModal');
        this.btnLargeModal = page.locator('#showLargeModal');
    }


}