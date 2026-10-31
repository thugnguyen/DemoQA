import { test, expect } from '@playwright/test';
import { ModalDialogsPage } from "../pages/ModalDialogsPage";
import { SmallDialogsPage } from "../pages/SmallDialogsPage";
import { LargeDialogsPage } from "../pages/LargeDialogsPage";
import { TestBase } from "../common/TestBase";

test ('Kiểm tra hiển thị và đóng hộp thoại Small Modal bằng nút Close' , async ({ page }) => {
    const modalDialogsPage = new ModalDialogsPage(page);
    const smallDialogsPage = new SmallDialogsPage(page);
    await page.goto('modal-dialogs');
    const testBase = new TestBase(page);
    const expectedTitleSmallText = 'Small Modal';
    await testBase.clickElement(modalDialogsPage.btnSmallModal);
    const actualTitle = await testBase.getModalText(page, modalDialogsPage.smallModalDialog, smallDialogsPage.lblTitle);
    expect(actualTitle).toBe(expectedTitleSmallText);
    const expectedSmallModalText = 'This is a small modal. It has very less content';
    const actualSmallModalText = await testBase.getModalText(page, modalDialogsPage.smallModalDialog, smallDialogsPage.lblContent);
    expect(actualSmallModalText).toBe(expectedSmallModalText);
})

test ('Kiểm tra hiển thị và đóng hộp thoại Large Moda' , async ({ page }) => {
    const modalDialogsPage = new ModalDialogsPage(page);
    const largeDialogsPage = new LargeDialogsPage(page);
    await page.goto('modal-dialogs');
    const testBase = new TestBase(page);
    const expectedTitleLargeText = 'Large Modal';
    await testBase.clickElement(modalDialogsPage.btnLargeModal);
    const actualTitle = await testBase.getModalText(page, modalDialogsPage.largeModalDialog, largeDialogsPage.lblTitle);
    expect(actualTitle).toBe(expectedTitleLargeText);
    const expectedLargeModalText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    const actualLargeModalText = await testBase.getModalText(page, modalDialogsPage.largeModalDialog, largeDialogsPage.lblContent);
    expect(actualLargeModalText).toBe(expectedLargeModalText);
})