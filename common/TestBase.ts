import { Page } from "@playwright/test";
export class TestBase{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goto(uri: string) {
        await this.page.goto(uri);
    }
}