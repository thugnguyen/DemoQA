import { Page } from "@playwright/test";
export class LargeDialogsPage {
    readonly page: Page;
    readonly lblTitle: string = '#example-modal-sizes-title-lg';
    readonly lblContent: string = '//div[@class ="modal-body"]';

    constructor (page: Page) {
        this.page = page;
    }
}