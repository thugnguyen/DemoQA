import { Page, Locator } from "@playwright/test";
export class SmallDialogsPage {
    readonly page: Page
    readonly lblTitle: string = '#example-modal-sizes-title-sm';
    readonly lblContent: string = '//div[@class ="modal-body"]';

    constructor (page: Page) {
        this.page = page;
    }


}