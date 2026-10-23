import { Locator, Page } from "playwright";
export class NestedFramePage {
    readonly page: Page;
    constructor(page:Page){
        this.page = page;

    }
}